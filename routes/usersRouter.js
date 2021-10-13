const UsersController = require('../controllers/UsersController')
const UsersValidatorUpdate = require('../middleware/validators/UsersValidatorUpdate')
const UsersValidator = require('../middleware/validators/UsersValidator')
const authUser = require('../middleware/authorization/authUser')
const authAdmin = require('../middleware/authorization/authAdmin')

const express = require('express')

const UsersRouter = express.Router()

UsersRouter.get('/', UsersController.index)

UsersRouter.get('/:id', authUser, UsersController.show)

UsersRouter.post('/', UsersValidator.register, UsersController.register)

UsersRouter.post('/login', UsersValidator.login, UsersController.login)

UsersRouter.put('/:id', authAdmin, UsersValidatorUpdate, UsersController.update)

UsersRouter.delete('/:id', authAdmin, UsersController.delete)

module.exports = UsersRouter