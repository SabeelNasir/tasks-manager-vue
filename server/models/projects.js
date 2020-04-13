const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const projectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    userId: Schema.Types.ObjectId,
    createdAt: Date,
    updatedAt: Date
})
module.exports = mongoose.model('projects', projectSchema, 'projects')