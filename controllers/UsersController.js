const Users = require("../models/User")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
class UsersController {
    async index(req, res) {
        const users = await Users.findAll()
        return res.status(200).json(users)
    }

    async show(req, res) {
        const post = await Users.findOne({ where: { id: req.params.id } })
        if (post)
            return res.status(200).json(post)
        return res.status(400).json({
            message: `Not found`
        })
    }

    async register(req, res) {
        try {
            const data = (Object.keys(req.query).length === 0) ? req.body : req.query
            const checkUnique = await Users.findOne({ where: { email: data.email } })
            if (!checkUnique) {
                const salt = await bcrypt.genSalt(10)
                data.password = await bcrypt.hash(data.password, salt)
                await Users.create(data)
                return res.status(200).json({
                    message: `User created`
                })
            }
            else {
                return res.status(406).json({
                    message: 'email should be unique'
                })
            }
        }
        catch (err) {
            return res.status(400).json({
                message: `Invalid Request`
            })
        }
    }

    async login(req, res) {
        try {
            const data = (Object.keys(req.query).length === 0) ? req.body : req.query
            const checkUser = await Users.findOne({ where: { email: data.email } })
            if (checkUser) {
                const validPassword = await bcrypt.compare(data.password, checkUser.password)
                if (!validPassword)
                    return res.status(406).send('invalid login')
                const token = checkUser.generateToken()
                return res.header('x-auth-token', token).status(200).send([checkUser, token])
            }
            else {
                return res.status(400).json({
                    message: `Not Valid`
                })
            }
        }
        catch (err) {
            return res.status(400).json({
                message: `Invalid Request`
            })
        }

    }

    async update(req, res) {
        if (Object.keys(req.body).length === 0 && Object.keys(req.query).length === 0)
            return res.status(400).json({
                message: `No changes`
            })
        const id = req.params.id
        const data = (Object.keys(req.query).length === 0) ? req.body : req.query
        const query = await Users.update(data, { where: { id: id } })
        if (query[0] !== 0)
            return res.status(200).json({
                message: `User updated successfully`
            })
        return res.status(400).json({
            message: `Not found`
        })
    }

    async delete(req, res) {
        const query = await Users.destroy({ where: { id: req.params.id } })
        if (query)
            return res.status(200).json({
                message: `User deleted successfully`
            })
        return res.status(400).json({
            message: `Not found`
        })
    }

}

module.exports = new UsersController