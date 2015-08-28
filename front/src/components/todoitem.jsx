import React from "react";

export default class TodoItem extends React.Component {
  render() {
    const todo = this.props.todo;
    const id = this.props.id;
    if(this.props.todo.status == 0) {
      return (
        <li key={id}>
          <input type="checkbox" />
          {todo.body}
        </li>
      )
    } else {
      return (
        <li><s>{todo.body}</s></li> 
      ) 
    }
  }
}
