const Joi = require("joi");

module.exports = Joi.object({
  username: Joi.string().required(),
  password: Joi.string()
    .$.min(6)
    .rule({ message: "Password length must be more than 6 characters" })
    .required(),
});
