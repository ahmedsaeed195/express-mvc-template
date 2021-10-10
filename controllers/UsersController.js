const Users = require("../models/User")
const UsersSchema = require('../validators/UsersValidator')
const UsersSchemaUpdate = require('../validators/UsersValidatorUpdate')
class UsersController {

    async index(req , res){
        const users = await Users.findAll()
        return res.status(200).json(users)
    }

    async show(req , res){
        const post = await Users.findOne({ where : { id : req.params.id } })
        if(post)
            return res.status(200).json(post)
        return res.status(400).json({
            message: `Not found`
        })
    }

    async store(req , res){
        try{
            const data = (Object.keys(req.query).length === 0) ? req.body : req.query
            await Users.create(data)
            return res.status(200).json({
                message: `User created`
            })
        }
        catch(err){
            return res.status(400).json({
                message: `Invalid Request`
            })
        }
    }

    async update(req , res){
        if(Object.keys(req.body).length === 0 && Object.keys(req.query).length === 0)
            return res.status(400).json({
                message: `No changes`
            })
        const data = (Object.keys(req.query).length === 0) ? req.body : req.query
        const query = await Users.update(data, { where : { id: req.params.id } })
        if(query[0] !== 0)
            return res.status(200).json({
                message: `User updated successfully`
            })
        return res.status(400).json({
            message: `Not found`
        })
    }

    async delete(req , res){
        const id = req.params.id
        const query = await Users.destroy({ where : { id : id } })
        if(query)
            return res.status(200).json({
                message: `User deleted successfully`
            })
        return res.status(400).json({
            message: `Not found`
        })
    }

}

module.exports = new UsersController