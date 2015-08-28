json.array!(@todos) do |todo|
  json.extract! todo, :id, :status, :body
  json.url todo_url(todo, format: :json)
end
