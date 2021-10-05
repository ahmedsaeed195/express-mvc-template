const UsersController = require('../controllers/UsersController')
const express = require('express')

const UsersRouter = express.Router()

UsersRouter.get('/' , UsersController.index)

UsersRouter.post('/' , UsersController.store)

UsersRouter.get('/:id' , UsersController.show)

UsersRouter.put('/:id' , UsersController.update)

UsersRouter.delete('/:id' , UsersController.delete)

module.exports = UsersRouter