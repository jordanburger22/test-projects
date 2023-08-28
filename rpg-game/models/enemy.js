const mongoose = require('mongoose')
const Schema = mongoose.Schema

const enemySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    health: {
        type: Number,
        required: true
    },
    attackPower: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    story: {
        type: Schema.Types.ObjectId,
        ref: 'StoryLine'
    }
})

module.exports = mongoose.model('Enemy', enemySchema)