const PostsController = require('../controllers/PostsController')
const PostsValidatorUpdate = require('../middleware/validators/PostsValidatorUpdate')
const PostsValidator = require('../middleware/validators/PostsValidator')

const express = require('express')

const PostsRoute = express.Router()

PostsRoute.get('/' , PostsController.index)

PostsRoute.get('/:id' , PostsController.show)

PostsRoute.post('/', PostsValidator , PostsController.store)

PostsRoute.put('/:id',PostsValidatorUpdate, PostsController.update)

PostsRoute.delete('/:id' , PostsController.delete)

module.exports = PostsRoute