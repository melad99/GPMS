const Joi = require("joi");

module.exports = Joi.object({
  time: Joi.string().required(),
  place: Joi.string().required(),
  project_id: Joi.number().required(),
});
