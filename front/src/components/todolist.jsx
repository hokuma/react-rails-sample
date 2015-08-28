import React from "react";
import TodoItem from "./todoitem.jsx";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    if(props.todos) {
      this.state = {
        todos: props.todos
      }; 
    } else {
      this.state = {
        todos: [
          {
            id: 1,
            body: "スーファミコントローラ買う",
            status: 0
          }
        ]
      };
    }
  }

  render() {
    var todos = this.state.todos;
    return (
      <ul>
        {
          todos.map((todo)=>{
            return <TodoItem todo={todo} key={todo.id} />
          })
        }
      </ul>
    )
  }
}

global.TodoList = TodoList;
