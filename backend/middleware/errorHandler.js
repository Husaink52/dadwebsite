// backend/middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error(`[Error] ${err.message || err}`);

  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "An unexpected error occurred",
    stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
  });
};

module.exports = errorHandler;
