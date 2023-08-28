const mongoose = require('mongoose')
const Schema = mongoose.Schema

const storyLineShema = new Schema({
    scenes: [{
        type: String,
    }],
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    likedUsers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    dislikedUsers:[{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    datePosted: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("StoryLine", storyLineShema)