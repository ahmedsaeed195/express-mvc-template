const Post = require("../models/Post")
class PostsController {

    async index(req, res) {
        const posts = await Post.findAll()
        return res.status(200).json(posts)
    }

    async show(req, res) {
        const post = await Post.findOne({ where: { id: req.params.id } })
        if (post)
            return res.status(200).json(post)
        return res.status(400).json({
            message: `Not found`
        })
    }

    async store(req, res) {
        try {
            const data = (Object.keys(req.query).length === 0) ? req.body : req.query
            await Post.create(data)
            return res.status(200).json({
                message: `Post created`
            })
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
        const data = (Object.keys(req.query).length === 0) ? req.body : req.query
        const query = await Post.update(data, { where: { id: req.params.id } })
        if (query[0] !== 0)
            return res.status(200).json({
                message: `Post updated successfully`
            })
        return res.status(400).json({
            message: `Not found`
        })
    }

    async delete(req, res) {
        const id = req.params.id
        const query = await Post.destroy({ where: { id: id } })
        if (query)
            return res.status(200).json({
                message: `Post deleted successfully`
            })
        return res.status(400).json({
            message: `Not found`
        })
    }

}

module.exports = new PostsController