// Middleware to validate the city input
const validateCityInput = (req, res, next) => {
    const { city } = req.query;

    // Check if city name is provided
    if (!city || city.trim() === '') {
        return res.status(400).json({
            error: 'City name is required'
        });
    }

    // Move to the controller
    next();
}

module.exports = validateCityInput;