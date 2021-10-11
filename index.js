// connect packages to vars 
const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const todoRoutes = require('./routes/todos')

const PORT = process.env.PORT || 3000 

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs' // extension names
})

// for pages rendering. Engine registered
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views') // where pages are from

app.use(express.urlencoded({ extended: true })) // necessary for post methods (get data)

app.use(todoRoutes)

// with async it is possible to use await 
async function start(){
    try {
        // mongo db: mongodb.com, created free database
        // better pass var to config, but it is tested project
        await mongoose.connect('mongodb+srv://dbUser-mongo-node:dbUserPassword-mongo-node@cluster0.bjppd.mongodb.net/todos', { //connect database
            useNewUrlParser: true, 
            useUnifiedTopology: false
        })
        app.listen(PORT, () => { // database is available at this moment 
            console.log('Server have been started')
        })
    } catch (e) {
        console.log(e)
    }
}

start()

