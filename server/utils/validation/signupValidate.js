const Joi = require("joi");

module.exports = Joi.object({
  username: Joi.string()
    .$.alphanum()
    .rule({ message: "Username must contain only letters or numbers" })
    .required(),
  name: Joi.string(),
  email: Joi.string().email().required(),
  role: Joi.string().required(),
  password: Joi.string()
    .$.min(6)
    .rule({ message: "Password length must be more than 6 characters" })
    .required(),
});
