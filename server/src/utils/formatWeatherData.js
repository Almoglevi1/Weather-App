// Helper function to format weather data
const formatWeatherData = (weatherData, hourlyData) => {
    return {
        city: weatherData.location.name,
        country: weatherData.location.country,
        lastUpdatedTime: weatherData.current.last_updated,
        temperature: weatherData.current.temp_c,
        condition: weatherData.current.condition.text,
        precipitation: weatherData.current.precip_mm,
        humidity: weatherData.current.humidity,
        wind: weatherData.current.wind_kph,
        latitude: weatherData.location.lat,
        longitude: weatherData.location.lon,
        localtime: weatherData.location.localtime,
        hourly: hourlyData
    };
};

export default formatWeatherData;