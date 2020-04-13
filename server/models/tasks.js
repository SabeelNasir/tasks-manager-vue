const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const tasksScehma = new Schema({
    project: {
        _id: Schema.Types.ObjectId,
        name: String
    },
    user: {
        _id: Schema.Types.ObjectId,
        name: String
    },
    task: {
        type: Schema.Types.String,
        required: true
    },
    description: {
        type: String
    },
    createdAt: Schema.Types.Date,
    endDate: Schema.Types.Date,
    completed: Boolean,
    updatedAt: Date
})
module.exports = mongoose.model('tasks', tasksScehma, 'tasks')