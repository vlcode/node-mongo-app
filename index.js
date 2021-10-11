const express = require('express')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3000 

const app = express()

// with async it is possible to use await 
async function start(){
    try {
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

