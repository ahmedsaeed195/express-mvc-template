const Post = require("../models/Post")

class PostsController{

    async index(req , res){
        const posts = await Post.findAll()
        res.status(200).json(posts)
    }

    async show(req , res){
        const post = await Post.findOne({ where : { id : req.params.id } })
        if(post)
            res.status(200).json(post)
        res.status(400).json({
            message: `Not found`
        })
    }

    async store(req , res){
        try{
            const data = req.body
            await Post.create(data)
            res.status(200).json({
                message: `Post created`
            })
        }
        catch(err){
            res.status(400).json({
                message: `Invalid Request`
            })
        }
    }

    async update(req , res){
        const data = req.body
        const query = await Post.update(data , { where : { id: req.params.id } })
        if(query[0] !== 0)
            res.status(200).json({
                message: `Post updated successfully`
            })
        res.status(400).json({
            message: `Not found`
        })
    }

    async delete(req , res){
        const id = req.params.id
        const query = await Post.destroy({ where : { id : id } })
        if(query)
            res.status(200).json({
                message: `Post deleted successfully`
            })
        res.status(400).json({
            message: `Not found`
        })
    }

}

module.exports = new PostsController