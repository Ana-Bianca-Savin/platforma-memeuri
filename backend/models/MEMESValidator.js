const Joi = require("joi")

const validator = (schema) => (payload) =>
    schema.validate(payload, { abortEarly: false })

const MEMESSchemaValidation = Joi.object({
    Description: Joi.string().max(2500).required()
    .messages({
        "string.empty": "description is missing",
        "string.max": "description can have a maximum of 2500 characters"
    })
})

module.exports.validateRegister = validator(MEMESSchemaValidation)