const Post = require("../models/Post")
const PostsSchema = require('../validators/PostsValidator')
const PostsSchemaUpdate = require('../validators/PostsValidatorUpdate')
class PostsController {

    async index(req , res){
        const posts = await Post.findAll()
        return res.status(200).json(posts)
    }

    async show(req , res){
        const post = await Post.findOne({ where : { id : req.params.id } })
        if(post)
            return res.status(200).json(post)
        return res.status(400).json({
            message: `Not found`
        })
    }

    async store(req , res){
        const validation = PostsSchema.validate(req.body)
        if(validation.error)
            return res.status(400).json(validation.error)
        try{
            await Post.create(validation.value)
            return res.status(200).json({
                message: `Post created`
            })
        }
        catch(err){
            return res.status(400).json({
                message: `Invalid Request`
            })
        }
    }

    async update(req , res){
        const validation = PostsSchemaUpdate.validate(req.body)
        if(validation.error)
            return res.status(400).json(validation.error)
            console.log(validation)
        if(Object.keys(validation.value).length === 0)
            return res.status(400).json({
                message: `No any changes`
            })
        const query = await Post.update(validation.value , { where : { id: req.params.id } })
        if(query[0] !== 0)
            return res.status(200).json({
                message: `Post updated successfully`
            })
        return res.status(400).json({
            message: `Not found`
        })
    }

    async delete(req , res){
        const id = req.params.id
        const query = await Post.destroy({ where : { id : id } })
        if(query)
            return res.status(200).json({
                message: `Post deleted successfully`
            })
        return res.status(400).json({
            message: `Not found`
        })
    }

}

module.exports = new PostsController