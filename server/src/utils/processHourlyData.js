// Helper function to process hourly data
const processHourlyData = (hourlyData) => {
    return hourlyData.map(hour => ({
        time: hour.time.split(' ')[1], // Extract time from datetime string
        temp: Math.round(hour.temp_c) // Round the temperature
    }));
};

module.exports = processHourlyData;