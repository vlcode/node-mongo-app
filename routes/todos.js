const {Router} = require('express')
const Todo = require('../models/Todo')
const router = Router()

// async because there are requests to db 
router.get('/', async (req, res) => {
    const todos = await Todo.find({})

    res.render('index', {
        title: 'Todos list',
        isIndex: true,
        todos // array todo as a parameter (data from db)
    })
})

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create todo',
        isCreate: true
    })
})

module.exports = router