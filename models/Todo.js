const {Schema, model} = require('mongoose')

// model for database
const schema = new Schema({
    title: {
        type: String, 
        required: true
    }, 
    completed: {
        type: Boolean, 
        default: true
    }
})

module.exports = model('Todo', schema) // how model will be created