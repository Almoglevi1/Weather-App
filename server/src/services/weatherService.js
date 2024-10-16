import axios from 'axios';
import processHourlyData from '../utils/processHourlyData';

const weatherApiUrl = 'http://api.weatherapi.com/v1/current.json'; // API url for current weather data
const weatherApiForecastUrl = 'http://api.weatherapi.com/v1/forecast.json'; // API url for hourly forecast data

// Fetch current weather data for the city
export const getWeatherData = async (city) => {
    try {
        const response = await axios.get(weatherApiUrl, {
            params: {
                key: process.env.WEATHER_API_KEY,
                q: city
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching weather data for ${city}: ${error.message}`);
        throw new Error(`Error fetching weather data for ${city}: ${error.message}`);
    }
};

// Fetch hourly forecast data for the city
export const getHourlyForecastData = async (city) => {
    try {
        const response = await axios.get(weatherApiForecastUrl, {
            params: {
                key: process.env.WEATHER_API_KEY,
                q: city,
                days: 1 // Fetch 1 day of hourly data
            }
        });

        // Process the hourly data before returning 
        return processHourlyData(response.data.forecast.forecastday[0].hour);
    } catch (error) {
        console.error(`Error fetching hourly forecast data for ${city}: ${error.message}`);
        throw new Error(`Error fetching hourly forecast data for ${city}: ${error.message}`);
    }
};