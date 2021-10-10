const UsersController = require('../controllers/UsersController')
const UsersValidatorUpdate = require('../validators/UsersValidatorUpdate')
const UsersValidator = require('../validators/UsersValidator')

const express = require('express')

const UsersRouter = express.Router()

UsersRouter.get('/' , UsersController.index)

UsersRouter.get('/:id' , UsersController.show)

UsersRouter.post('/', UsersValidator , UsersController.store)

UsersRouter.put('/:id', UsersValidatorUpdate , UsersController.update)

UsersRouter.delete('/:id' , UsersController.delete)

module.exports = UsersRouter