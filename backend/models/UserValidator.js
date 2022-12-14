const Joi = require("joi")

const validator = (schema) => (payload) =>
    schema.validate(payload, { abortEarly: false })

const UserSchemaValidation = Joi.object({
    email: Joi.string().regex(/[a-z0-9_\-\.]@stud\.acs\.upb\.ro/).required()
    .messages({ "string.empty": "email is missing",
                "": "" }),
    username: Joi.string().min(8).max(32).required()
    .messages({ "string.empty": "username is missing",
                "string.min": "username should be between 8 and 32 characters long",
                "string.max": "username should be between 8 and 32 characters long" }),
    password: Joi.string().min(8).max(32).required()
    .messages({ "string.empty": "password is missing",
                "string.min": "password should be between 8 and 32 characters long",
                "string.max": "password should be between 8 and 32 characters long"
    })
})

module.exports.validateRegister = validator(UserSchemaValidation)

