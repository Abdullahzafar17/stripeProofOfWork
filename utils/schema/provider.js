const joi = require("joi");

const createAccountSchema = joi.object({
  firstName: joi.string().required().messages({
    "any.required": `firstName is a required field`,
    "string.empty": `firstName cannot be empty`,
  }),
  lastName: joi.string().required().messages({
    "any.required": `lastName is a required field`,
    "string.empty": `lastName cannot be empty`,
  }),
  email: joi.string().required().email().messages({
    "any.required": `Email is a required field`,
    "string.empty": `Email cannont be empty`,
    "string.email": `Enter a valid email`,
  }),
});

module.exports = {
  createAccountSchema,
};
