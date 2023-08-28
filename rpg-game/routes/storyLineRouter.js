const express = require('express')
const storyLine = require("../models/storyLine.js")
const storyLineRouter = express.Router()


// Get All stories

storyLineRouter.get('/', (req, res, next) => {
    storyLine.find((err, stories) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(stories)
    })
})

// Get stories By User

storyLineRouter.get('/user', (req, res, next) => {
    storyLine.find({user: req.auth._id}, (err, stories) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(stories)
    })
})

// Add New stories

storyLineRouter.post('/', (req, res, next) => {
    req.body.user = req.auth._id
    const newStoryLine = new storyLine(req.body)
    newStoryLine.save((err, savedStory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedStory)
    })
})

// Delete story

storyLineRouter.delete('/:storyId', (req, res, next) => {
    storyLine.findOneAndDelete(
        {_id: req.params.storyId, user: req.auth._id},
        (err, deletedStory) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Deleted storyline with id ${deletedStory._id}`)
        }
    )
})

// Update Post

storyLineRouter.put('/:storyId', (req, res, next) => {
    storyLine.findOneAndUpdate(
        {_id: req.params.storyId, user: req.auth._id},
        req.body,
        {new: true},
        (err, updatedStory) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedStory)
        }
    )
})

// Upvote a Post
storyLineRouter.put('/upVote/:storyId', (req, res, next) => {
    storyLine.findOneAndUpdate(
        {_id: req.params.storyId},
        { $addToSet: { likedUsers: req.auth._id },
        $pull : {dislikedUsers: req.auth._id}},
        {new: true},
        (err, updatedStory) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedStory)
        }
    )
})

module.exports = storyLineRouter