// Middleware for handling 404 errors
const notFoundHandler = (req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
};

// Middleware for handling 400 error
const invalidCityHandler = (req, res, next) => {
  const error = new Error(
    "No matching location found, you must enter a valid city in English"
  );
  error.status = 400;
  next(error);
};

// Middleware for handling general errors
const errorHandler = (error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
};

module.exports = {
  notFoundHandler,
  invalidCityHandler,
  errorHandler,
};
