// validationMiddleware.js
const Joi = require('@hapi/joi');

const validateEmployee = (req, res, next) => {
  const schema = Joi.object({
    firstName: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string().email(),
    dateOfBirth: Joi.date().iso(),
    department: Joi.string(),
    position: Joi.string(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

module.exports = {
  validateEmployee,
};
