const mongoose = require('mongoose')
const Schema = mongoose.Schema  
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    operations:[{
        type: Schema.ObjectId, 
        ref: "Operation"
    }]
})

const User = mongoose.model('User', userSchema)
module.exports = User