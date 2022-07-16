const mongoose = require('mongoose')

const operationSchema = new mongoose.Schema({
    concept: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    type:{
        type: String,
        enum: ['income', 'outcome'],
        required: true
    }
})

const Operation = mongoose.Model('Operation', operationSchema)
module.exports = Operation