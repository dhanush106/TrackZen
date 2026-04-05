const env = require('../config/env');
const { successResponse } = require('../utils/apiResponse');

const getHealth = (req, res) => {
  return res.status(200).json(
    successResponse({
      message: 'Backend is healthy',
      data: {
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: env.nodeEnv
      }
    })
  );
};

module.exports = {
  getHealth
};
