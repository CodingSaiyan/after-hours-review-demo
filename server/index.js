const express = require('express')
    , bodyParser = require('body-parser')
    , controller = require('./controller')
    , app = express()
    
app.use(bodyParser.json())

app.get('/api/todos', controller.getTodos)
app.post('/api/todos', controller.addTodo)
app.put('/api/todos/:id', controller.editTodo)
app.delete('/api/todos/:id', controller.deleteTodo)


const port = 4242
app.listen(port, () => console.log('Why is everybody always picking on me', port))