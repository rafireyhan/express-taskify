const mongoose = require('mongoose');
const {v4: uuidv4} = require("uuid");

const taskSchema = new mongoose.Schema({
    _id:{
        type: String,
        default: uuidv4,
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true,
        enum: ['pending', 'complete']
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
    updatedAt:{
        type: Date,
    }
})

module.exports = mongoose.model('task', taskSchema);