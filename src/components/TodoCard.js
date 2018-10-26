import React, {Component} from 'react'
import axios from 'axios'

class TodoCard extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            showEdit: false
        }
    }

    componentDidMount() {
        this.setState({title: this.props.todo.title})
    }

    handleUpdateTitle = (e) => {
        this.setState({title: e.target.value})
    }

    handleEdit = () => {
        axios.put(`/api/todos/${this.props.todo.id}`, {title: this.state.title}).then(results => {
            this.props.updateTodos(results.data)
            this.showEdit()
        })
    }

    showEdit = () => {
        this.setState({showEdit: !this.state.showEdit})
    }

    render() {
        return (
            <div>
            
                {
                    this.state.showEdit ?
                   (
                       <div>
                            <input value={this.state.title} type='text' onChange={this.handleUpdateTitle}/>
                            <br/>
                            <br/>
                            <button onClick={this.handleEdit}>Update</button>
                            <button onClick={this.showEdit}>Cancel</button>
                       </div>
                   ) :
                    <div>
                        <p>{this.props.todo.title}</p>
                        <button onClick={this.showEdit}>Edit</button>
                        <button onClick={() => this.props.deleteTodo(this.props.todo.id)}>Delete</button>
                    </div>
                }

            </div>
        )
    }
}

export default TodoCard