const express = require('express')

const PostsRouter = require('./postsRouter')
const UsersRouter = require('./usersRouter')

const Route = express.Router()

// Default Route

Route.get('',(req,res) => {
    res.json({
        message: 'Connection established'
    })
})

// Posts Routes

Route.use('/posts', PostsRouter)

// Users Routes

Route.use('/users', UsersRouter)

// Comments Routes

module.exports = Route