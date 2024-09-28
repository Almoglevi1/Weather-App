const express = require('express');
const weatherController = require('../controllers/weatherController.js');
const validateCityInput = require('../middlewares/validateCityInput.js');

const router = express.Router();

// Weather route: GET /api/weather?city=CityName
router.get('/', validateCityInput, weatherController.getWeather);

module.exports = router;