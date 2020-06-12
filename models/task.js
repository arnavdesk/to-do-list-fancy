const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    state: {
        type: String,
        required: true
    },
})

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;