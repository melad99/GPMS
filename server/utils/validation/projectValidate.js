const Joi = require("joi");

module.exports = Joi.object({
  name: Joi.string()
    .$.max(250)
    .rule({ message: "Content can\t be more than 250 characters" })
    .required(),
  description: Joi.string(),
  link: Joi.string(),
  rating: Joi.string(),
  category_id: Joi.number(),
  created_at: Joi.string(),
});
