import React from 'react';

export default function WeatherInfo({ weatherData, error }) {
    // If there is an error or weatherData is not provided, return an error message
    if (error || !weatherData) {
        return <p className="error-message">{error}</p>;
    }

    // Extract the lastUpdatedTime from the weatherData object
    const lastUpdatedTime = weatherData.lastUpdatedTime;

    // Create a Date object from the API response
    const date = new Date(lastUpdatedTime);

    // Format the date to DD/MM/YYYY at HH:MM
    const formattedDate = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()} at ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;

    // Get the current temperature and round it 
    const temperature = Math.round(weatherData.temperature);

    // Extract time from lastUpdatedTime
    const lastUpdated = weatherData.lastUpdatedTime.split(' ')[1];
    const lastUpdatedHour = parseInt(lastUpdated.split(':')[0]);

    // Filter the relevant hourly data (3 hours before, current hour, and 1 hour after)
    const relevantHours = weatherData.hourly.filter(hour => {
        const hourTime = parseInt(hour.time.split(':')[0]);
        return hourTime >= lastUpdatedHour - 3 && hourTime <= lastUpdatedHour + 1;
    }) || [];

    return (
        <div>
            <div className="weather-location">
                <h1>{weatherData.city}</h1>
                <h2>{weatherData.country}</h2>
                <h3>{formattedDate}</h3>
            </div>
            <div className="weather-details">
                <h1><span>{temperature}</span>°</h1>
                <h2>{weatherData.condition}</h2>
            </div>
            <div className="weather-stats">
                <div className="weather-labels">
                    <h3>precipitation</h3>
                    <h3>humidity</h3>
                    <h3>wind</h3>
                </div>
                <div className="weather-values">
                    <h3>{weatherData.precipitation} mm</h3>
                    <h3>{weatherData.humidity}%</h3>
                    <h3>{weatherData.wind} km/h</h3>
                </div>
            </div>
            <div className="hourly-data">
                {relevantHours.map((hour, index) => (
                    <div key={index} className="hourly-item">
                        <div className="hours">{hour.time}</div>
                        <div className="temperatures">{Math.round(hour.temp)}°</div>
                    </div>
                ))}
            </div>
        </div>
    )
}