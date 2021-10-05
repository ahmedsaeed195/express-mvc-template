const PostsController = require('../controllers/PostsController')
const express = require('express')

const PostsRoute = express.Router()

PostsRoute.get('/' , PostsController.index)

PostsRoute.post('/' , PostsController.store)

PostsRoute.get('/:id' , PostsController.show)

PostsRoute.put('/:id' , PostsController.update)

PostsRoute.delete('/:id' , PostsController.delete)

module.exports = PostsRoute