import React, { useState } from "react";
import "./styles/App.css";
import WeatherForm from "./components/WeatherForm";
import WeatherInfo from "./components/WeatherInfo";
import LocationInfo from "./components/LocationInfo";

function App() {
  // State to hold weather data
  const [weatherData, setWeatherData] = useState(null);
  // State to hold error messages
  const [error, setError] = useState(null);

  return (
    <div className="container">
      {/* Left column containing logo, description, form, and weather data */}
      <div className="column column-left">
        <div className="logoImage">
          <img
            src="/logo/weatherLogo.png"
            alt="Weather App Logo"
            className="logo"
          />
        </div>
        <h2 className="WeatherOpening">
          Use my weather app to see the weather around the world
        </h2>
        {/* Weather form to input location and fetch weather data */}
        <WeatherForm setWeatherData={setWeatherData} setError={setError} />
        {/* Component to display fetched weather data (latitude, longitude and localtime) */}
        <LocationInfo weatherData={weatherData} error={error} />
      </div>
      {/* Right column containing detailed weather information */}
      <div className="column column-right">
        <div className="weather-info-container">
          {/* Component to display detailed weather information */}
          <WeatherInfo weatherData={weatherData} error={error} />
        </div>
      </div>
    </div>
  );
}

export default App;
