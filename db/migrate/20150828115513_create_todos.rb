class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.integer :status
      t.string :body

      t.timestamps null: false
    end
  end
end
