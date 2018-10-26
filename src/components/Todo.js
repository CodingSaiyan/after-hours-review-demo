import React, {Component} from 'react'
import TodoCard from './TodoCard'
import axios from 'axios'
import Header from './Header'


class Todo extends Component {
constructor() {
    super()
    this.state = {
      todos: [],
      input: ''
    }
  }
  componentDidMount() {
    axios.get('/api/todos').then(results => {
      this.setState({todos: results.data})
    })
  }

  handleInput = (e) => {
    this.setState({input: e.target.value})
  }

  addTodo = (e) => {
    e.preventDefault()
    axios.post(`/api/todos`, {title: this.state.input}).then(results => {
      this.setState({
        todos: results.data, 
        input: ''
      })
    })
  }
 
  deleteTodo = (id) => {
    axios.delete(`/api/todos/${id}`).then(results => {
      this.setState({todos: results.data})
    })
  }

  updateTodos = (todos) => {
    this.setState({todos})
  }

  render() {
    let todos = this.state.todos.map( todo => {
      return (
        <TodoCard 
          key={todo.id} 
          todo={todo}
          deleteTodo={this.deleteTodo}
          updateTodos={this.updateTodos} />
      )
    })
    return (
      <div style={{marginLeft: '100px'}}>
        <div>
          <form onSubmit={this.addTodo}>
            <input value={this.state.input} placeholder='Add A Todo' type='text' onChange={this.handleInput}/>
            <button>Add It</button>
          </form>
        </div>
        <Header />
        {todos}
      </div>
    );
  }
}

export default Todo