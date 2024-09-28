import React from 'react'

export default function LocationInfo({ weatherData, error }) {
    // If there is an error or weatherData is not provided, return null to render nothing
      if (error || !weatherData) {
        return null;
    }

    // Extract the localtime from the weatherData object
    const localtime = weatherData.localtime;

    // Create a Date object from the localtime string
    const date = new Date(localtime);

    // Format the date to DD/MM/YYYY at HH:MM
    const formattedDate = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()} at ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;

    return (
        <div className="weather-data">
            <div className="top-row">
                <h3>Latitude {weatherData.latitude}</h3>
                <h3>Longitude {weatherData.longitude}</h3>
            </div>
            <h3 className="date">Accurate to {formattedDate}</h3>
        </div>
    )
}