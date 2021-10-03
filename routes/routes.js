const express = require('express')
const PostsController = require('../controllers/PostsController')
const Route = express.Router()

// Posts Routes

Route.get('/posts' , PostsController.index)

Route.post('/posts' , PostsController.store)

Route.get('/posts/:id' , PostsController.show)

Route.put('/posts/:id' , PostsController.update)

Route.delete('/posts/:id' , PostsController.delete)

// Comments Routes

module.exports = Route