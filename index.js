// connect packages to vars 
const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')

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

// with async it is possible to use await 
async function start(){
    try {
        // mongo db: mongodb.com, created free database
        await mongoose.connect('', { //connect database
            useNewUrlParser: true, 
            useFindAndModify: false
        })
        app.listen(PORT, () => { // database is available at this moment 
            console.log('Server have been started')
        })
    } catch (e) {
        console.log(e)
    }
}

start()

