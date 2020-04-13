const mongoose = require('mongoose')
const { AvenueSchema } = require('./avenues')

const Schema = mongoose.Schema
const eventsSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true
    },
    description: String,
    date: Schema.Types.Date,
    userId: {
        type: Schema.Types.ObjectId,
        index: true,
        required: false
    },
    avenue: AvenueSchema
})
module.exports = mongoose.model('events', eventsSchema, 'events')