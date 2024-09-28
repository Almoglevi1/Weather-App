const express = require("express");
const cors = require("cors");
const weatherRoute = require("./api/routes/weatherRoute");
const {
  notFoundHandler,
  invalidCityHandler,
  errorHandler,
} = require("./api/middlewares/errorHandler");

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON body

// Routes
app.use("/api/weather", weatherRoute);

// Use the 404 handler for unmatched routes
app.use(notFoundHandler);

// Use the 400 handler for invalid city
app.use(invalidCityHandler);

// Use the general error handler
app.use(errorHandler);

module.exports = app;
