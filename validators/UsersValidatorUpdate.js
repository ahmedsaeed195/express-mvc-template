const Joi = require('joi')

const UsersSchema = Joi.object({
    first_name: Joi.string()
        .min(2)
        .max(30),
    last_name: Joi.string()
        .min(3)
        .max(30),
    email: Joi.string()
        .min(3)
        .max(30),
    password: Joi.string()
        .min(3)
        .max(30),
})

module.exports = UsersSchema