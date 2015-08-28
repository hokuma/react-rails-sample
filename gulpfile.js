var gulp = require('gulp');
var glob = require('glob');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('browserify:bundle', function() {
  browserify('./front/src/app.jsx', {debug: true })
    .transform(babelify)
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./app/assets/javascripts/'))
});

gulp.task('browserify:components', function() {
  var compFiles = glob.sync('./front/src/components/**/*.jsx');
  browserify(compFiles, {debug: true})
    .transform(babelify)
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('components.js'))
    .pipe(gulp.dest('./app/assets/javascripts/'))
});

gulp.task('watch', function() {
  gulp.watch('./front/src/**/*.{js,jsx,coffee}', ['browserify:bundle', 'browserify:components']);
});

gulp.task('default', ['browserify:components', 'browserify:bundle', 'watch']);
