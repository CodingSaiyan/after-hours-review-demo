let todos = [
    {
        title: 'Add todos',
        id: 1,
    },
    {
        title: 'Do todos',
        id: 2
    }
]
let id = 3

module.exports = {
    getTodos: (req, res) => {
        
        res.status(200).send(todos)
    },
    addTodo: (req, res) => {
        const {title} = req.body
        let newTodo = {
            title,
            id
        }
        id++
        todos.push(newTodo)
        res.status(200).send(todos)
    },
    editTodo: (req, res) => {
        const {id} = req.params
        const {title} = req.body
        let index = todos.findIndex(t => t.id === +id)
        if(index !== -1) {
            todos[index].title = title
        }
        res.status(200).send(todos)
    },
    deleteTodo: (req, res) => {
        const {id} = req.params
        let index = todos.findIndex(t => t.id === +id)
        if(index !== -1) {
            todos.splice(index, 1)
        }
        res.status(200).send(todos)

    } 

}