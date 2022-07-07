const Joi = require("joi");

module.exports = Joi.object({
  status: Joi.string().required(),
  content: Joi.string().required(),
  project_id: Joi.number().required(),
});
