// handler.js
const serverless = require('serverless-http');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'SkillHub API is running',
    environment: 'local',
    services: {
      database: 'none',
      storage: 'none',
      auth: 'none'
    }
  });
});

app.use('/users', userRoutes);

module.exports.handler = serverless(app);
