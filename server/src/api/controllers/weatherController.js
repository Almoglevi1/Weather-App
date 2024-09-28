require('dotenv').config(); // Load environment variables

const axios = require('axios');

const weatherApiUrl = 'http://api.weatherapi.com/v1/current.json'; // API url for current weather data
const weatherApiForecastUrl = 'http://api.weatherapi.com/v1/forecast.json'; // API url for hourly forecast data


// Controller to get weather data
const getWeather = async (req, res, next) => {
    try {
        const { city } = req.query;

        // Fetch current weather data for the city
        const response = await axios.get(weatherApiUrl, {
            params: {
                key: process.env.WEATHER_API_KEY,
                q: city
            }
        });

        // Fetch hourly forecast data for the city
        const hourlyResponse = await axios.get(weatherApiForecastUrl, {
            params: {
                key: process.env.WEATHER_API_KEY,
                q: city,
                days: 1 // Fetch 1 day of hourly data
            }
        });

        // Process hourly data
        const hourlyData = hourlyResponse.data.forecast.forecastday[0].hour.map(hour => ({
            time: hour.time.split(' ')[1], // Extract time from datetime string
            temp: Math.round(hour.temp_c) // Round the temperature
        }));

        // Format the data before sending it to the client
        const formattedData = {
            city: response.data.location.name,
            country: response.data.location.country,
            lastUpdatedTime: response.data.current.last_updated,
            temperature: response.data.current.temp_c,
            condition: response.data.current.condition.text,
            precipitation: response.data.current.precip_mm,
            humidity: response.data.current.humidity,
            wind: response.data.current.wind_kph,
            latitude: response.data.location.lat,
            longitude: response.data.location.lon,
            localtime: response.data.location.localtime,
            hourly: hourlyData
        };

        // Send the formatted weather data to the client
        res.json(formattedData);

    } catch (error) {
        // If something goes wrong, pass the error to the error handler
        next(error);
    }
};

module.exports = { getWeather };