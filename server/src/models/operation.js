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
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

const Operation = mongoose.model('Operation', operationSchema)
module.exports = Operation