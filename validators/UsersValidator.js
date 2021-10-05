const Joi = require('joi')

const UsersSchema = Joi.object({
    first_name: Joi.string()
        .min(2)
        .max(30)
        .required(),
    last_name: Joi.string()
        .min(3)
        .max(30)
        .required(),
    email: Joi.string()
        .min(3)
        .max(30)
        .required(),
    password: Joi.string()
        .min(3)
        .max(30)
        .required(),

})

module.exports = UsersSchema