const express = require('express')
const authRouter = express.Router()
const authController = require('../controllers/auth/authController.js')
const joi = require('joi')
const validator = require('express-joi-validation').createValidator({})

const registerSchema = joi.object({
    username: joi.string().min(3).max(12).required(),
    password: joi.string().min(6).max(12).required(),
    mail: joi.string().email().required()
})

const loginSchema = joi.object({
    password: joi.string().min(6).max(12).required(),
    mail: joi.string().email().required()
})

authRouter.post('/register', validator.body(registerSchema), authController.controllers.postRegister)
authRouter.post('/login', validator.body(loginSchema), authController.controllers.postLogin)



module.exports = authRouter