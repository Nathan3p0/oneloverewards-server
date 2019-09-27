require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const authRouter = require('./auth/auth-router')
const membersRouter = require('./routes/dashboard/members-router')

const app = express();

app.use(morgan((NODE_ENV === 'production') ? 'tiny' : 'common', {
    skip: () => NODE_ENV === 'test'
}))
app.use(helmet());
app.use(cors());


app.use('/api/auth', authRouter)
app.use('/api/dashboard/members', membersRouter)

const errorHandler = (error, req, res, next) => {
    let response
    if (NODE_ENV === 'production') {
        response = { error: { message: 'server error' } }
    } else {
        console.error(error)
        response = { message: error.message, error }
    }
    res.status(500).json(response)
}

app.use(errorHandler)

app.get('/', (req, res) => {
    res.status(200).send('The official API of One Love Rewards')
})

module.exports = app;