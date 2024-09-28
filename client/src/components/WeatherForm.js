import React, { useState, useEffect } from "react";
import axios from "axios";

// Backend URL for the weather API
const backendUrl = "http://localhost:3001/api/weather";

// Utility function to capitalize the first letter of a string
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default function WeatherForm({ setWeatherData, setError }) {
  // State to store the city name
  const [city, setCity] = useState("");

  useEffect(() => {
    // Fetch weather data for the last searched city or Tel Aviv by default
    const fetchInitialWeather = async () => {
      const lastCity = localStorage.getItem("lastCity") || "Tel Aviv";

      try {
        // Make the API request to fetch weather data
        const response = await axios.get(`${backendUrl}`, {
          params: { city: lastCity },
        });
        // Update the weather data state
        setWeatherData(response.data);
        // Set the city state to the last searched city
        setCity(capitalizeFirstLetter(lastCity));
      } catch (err) {
        // Set error message if the request fails
        setError("Failed to fetch initial weather data.");
      }
    };

    // Call the function to fetch initial weather data
    fetchInitialWeather();
  }, [setWeatherData, setError]);

  // Handle form submission
  const handleSubmit = async (e) => {
    // Prevents the default form submission behavior
    e.preventDefault();

    // Clear any previous errors
    setError(null);

    // Check if the input is empty
    if (!city.trim()) {
      setError("City name is required");
      return;
    }

    try {
      // Make the API request to fetch weather data for the entered city
      const response = await axios.get(`${backendUrl}`, {
        params: { city },
      });

      // Update the weather data state
      setWeatherData(response.data);

      // Save the searched city to local storage
      localStorage.setItem("lastCity", city);

      // Set the city state with the first letter capitalized
      setCity(capitalizeFirstLetter(city));
    } catch (err) {
      // Check if the error is related to invalid city
      if (err.response && err.response.status === 400) {
        setError(
          "No matching location found, you must enter a valid city in English."
        );
      } else {
        // General error for other cases
        setError("Failed to fetch weather data.");
      }
    }
  };

  return (
    <div className="weather-form">
      <div className="input-container">
        <h2 className="cityName">City name</h2>
        <div className="textContainer">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            ></input>
            <button className="check-button" type="submit">
              Check
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
