const { errorResponse } = require('../utils/apiResponse');

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.error(err);
  }

  return res.status(statusCode).json(
    errorResponse({
      message,
      errors: process.env.NODE_ENV !== 'production' ? err.stack : undefined
    })
  );
};

module.exports = errorHandler;
