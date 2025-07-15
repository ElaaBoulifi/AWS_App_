const { v4: uuidv4 } = require("uuid");
const Joi = require("joi");
const ddb = require("../utils/dynamoClient");
const { PutCommand } = require("@aws-sdk/lib-dynamodb");

const USERS_TABLE = "skillhub-users"; // You will create this table next

const createUser = async (req, res) => {
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
    id: uuidv4(),
    ...value,
    createdAt: new Date().toISOString()
  };

  try {
    await ddb.send(new PutCommand({
      TableName: USERS_TABLE,
      Item: user
    }));

    return res.status(201).json({
      success: true,
      user
    });
  } catch (err) {
    console.error("DynamoDB error:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to save user"
    });
  }
};

module.exports = { createUser };
