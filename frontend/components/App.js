import React from 'react'
import TodoList from './TodoList';
import Form from './Form';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {todos : 
      [
        {
          name: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
        {
          name: 'Finish Unit',
          id: 15288170772865,
          completed: false
        },
        {
          name: 'Practice Spanish',
          id: 15288170843587,
          completed: true
        }
      ]
    }
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todos : this.state.todos.filter(todo => {
        return (todo.completed === false)
      })
    })
  }

  handleAdd = (task) => {
    const newTodo = {
      name : task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      todos: [
        ...this.state.todos,
        newTodo
      ]
    })
  }

    handleToggle = (key) => {
      this.setState({
        ...this.state,
        todos : this.state.todos.map( todo => {
          if (todo.id === key){
            return {
              ...todo,
              completed: !todo.completed
            }
          } return todo
        })
      })
    }

  render() {
    const {todos} = this.state;

    return (
      <div>
        <h2>To Dos:</h2>

        <TodoList todos={todos} handleToggle={this.handleToggle}/>

        <Form handleClear={this.handleClear} handleAdd={this.handleAdd}/>
      </div>
    )
  }
}
