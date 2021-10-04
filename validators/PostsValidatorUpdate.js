const Joi = require('joi')

const PostsSchemaUpdate = Joi.object({
    title: Joi.string()
        .min(3)
        .max(30),
    description: Joi.string()
        .min(3)
        .max(30),
})

module.exports = PostsSchemaUpdate