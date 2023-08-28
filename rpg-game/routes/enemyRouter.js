const express = require('express')
const enemy = require('../models/enemy')
const enemyRouter = express.Router()


    // Get all 

enemyRouter.get('/', (req, res, next) => {
    enemy.find((err, enemies) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(enemies)
    })
})

    // Get by storyline

enemyRouter.get('/storyLine', (req, res, next) => {
    enemy.find({story: req.auth._id}, (err, enemies) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(enemies)
    })
})

    // Add new enemy

enemyRouter.post('/', (req, res, next) => {
    req.body.user = req.auth._id
    const newStory = new enemy(req.body)
    newStory.save((err, savedEnemy) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedEnemy)
    })
})

    // Delete enemy

enemyRouter.delete('/:enemyId', (req, res, next) => {
    enemy.findOneAndDelete(
        {_id: req.params.enemyId, user: req.auth._id},
        (err, deletedEnemy) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Deleted enemy with Id of ${deletedEnemy._id}`)
        }
    )
})

    // Update enemy

enemyRouter.put('/:enemyId', (req, res, next) => {
    enemy.findOneAndUpdate(
        {_id: req.params.enemyId, user: req.auth._id},
        (err, updatedEnemy) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedEnemy)
        }
    )
})

module.exports = enemyRouter