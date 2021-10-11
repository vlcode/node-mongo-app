const {Router} = require('express')
const Todo = require('../models/Todo')
const router = Router()

// async because there are requests to db 
router.get('/', async (req, res) => {
    const todos = await Todo.find({}).lean()

    res.render('index', {
        title: 'Todos list',
        isIndex: true,
        todos: todos // array todo as a parameter (data from db)
    })
})

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create todo',
        isCreated: true
    })
})

router.post('/create', async (req, res) => {
    const todo = new Todo({
        title: req.body.title
    })

    await todo.save() // method is async, send promise back -> await
    res.redirect('/')
})

router.post('/complete', async(req, res) => {
    const todo = await Todo.findById(req.body.id) // how name is

    todo.completed = !!req.body.completed // !! string 'true' -> bool true
    await todo.save()

    res.redirect('/')
})

module.exports = router