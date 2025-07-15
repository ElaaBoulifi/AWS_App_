const serverless = require('serverless-http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.json());

// Route
app.post('/users', (req, res) => {
  const { name, email, skillsOffered = [], skillsWanted = [] } = req.body;

  if (!name || !email) {
    return res.status(400).json({ success: false, message: "Name and email are required" });
  }

  const newUser = {
    id: Date.now().toString(),
    name,
    email,
    skillsOffered,
    skillsWanted,
    createdAt: new Date().toISOString(),
  };

  return res.status(201).json({ success: true, user: newUser });
});

module.exports.handler = serverless(app);
