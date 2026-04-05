const { errorResponse } = require('../utils/apiResponse');

const notFoundHandler = (req, res) => {
  return res.status(404).json(
    errorResponse({
      message: `Route not found: ${req.method} ${req.originalUrl}`
    })
  );
};

module.exports = notFoundHandler;
