const { v4: uuidv4 } = require('uuid');
const Joi = require('joi');

const createUser = (req, res) => {
  const userSchema = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    skillsOffered: Joi.array().items(Joi.string()).default([]),
    skillsWanted: Joi.array().items(Joi.string()).default([])
  });

  const { error, value } = userSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message
    });
  }

  const user = {
    id: Date.now().toString(),
    ...value,
    createdAt: new Date().toISOString()
  };

  return res.status(201).json({
    success: true,
    user
  });
};

module.exports = { createUser };
