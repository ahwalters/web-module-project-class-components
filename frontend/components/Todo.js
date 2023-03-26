import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div>
        <li>{this.props.todo.name} { this.props.todo.completed ? <span>- Completed</span> : <span> </span>}</li>
      </div>
    )
  }
}
