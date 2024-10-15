import { getWeatherData, getHourlyForecastData } from '../services/weatherService';
import formatWeatherData from '../utils/formatWeatherData';

// Controller to get weather data
const weatherController = async (req, res, next) => {
    try {
        const { city } = req.query;

        const weatherData = await getWeatherData(city);
        const hourlyData = await getHourlyForecastData(city);

        // Format the data before sending it to the client
        const formattedData = formatWeatherData(weatherData, hourlyData);

        // Send the formatted weather data to the client
        res.json(formattedData);
    } catch (error) {
        // If something goes wrong, pass the error to the error handler
        next(error);
    }
};

export default weatherController;