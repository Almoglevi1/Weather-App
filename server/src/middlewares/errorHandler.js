// Middleware for handling 404 errors
export const notFoundHandler = (req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
};

// Middleware for handling 400 error
export const invalidCityHandler = (req, res, next) => {
  const error = new Error("No matching location found, you must enter a valid city in English");
  error.status = 400;
  next(error);
};

// Middleware for handling general errors
export const errorHandler = (error, req, res, next) => {
  res.status(error.status || 500).json({ message: error.message });
};
