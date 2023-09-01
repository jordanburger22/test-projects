const express = require('express')
const http = require('http')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const morgan = require('morgan')
const app = express()
const authRouter = require('./routes/authRouter.js')

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || process.env.API_PORT
const MONGO_URL = process.env.MONGO_URL

app.use('/api/auth', authRouter)


mongoose.set('strictQuery', true)
mongoose.connect(MONGO_URL)
    .then(() => {
        console.log('Connected to DB')
        server.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    })
    .catch(err => console.log(err))



const server = http.createServer(app)