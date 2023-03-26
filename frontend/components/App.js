import React from 'react'
import TodoList from './TodoList';

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
          id: 1528817077286,
          completed: false
        },
        {
          name: 'Practice Spanish',
          id: 1528817084358,
          completed: true
        }
      ]
    }
  }
  render() {
    const {todos} = this.state;

    return (
      <div>
        <h2>To Dos:</h2>

        <TodoList todos={todos}/>

        <form>
          <input />
          <button></button>
        </form>

        <button></button>
      </div>
    )
  }
}
