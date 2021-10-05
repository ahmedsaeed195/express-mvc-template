const Joi = require('joi')

const PostsSchema = Joi.object({
    title: Joi.string()
        .min(3)
        .max(30)
        .required(),
    description: Joi.string()
        .min(3)
        .max(30)
        .required(),
    user_id: Joi.number().required(),
})

module.exports = PostsSchema