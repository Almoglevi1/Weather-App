# Weather App

This is a weather application that allows users to fetch and display weather information for different cities around the world.<br> The application consists of a client-side React app and a server-side Node.js and Express app.

## Features

- Input a city name to get the current weather information.
- Displays temperature, humidity, and weather conditions.

## API

- This application uses the [WeatherAPI](https://www.weatherapi.com/) to fetch weather data for each city.
- You need to sign up on their website to get an API key.

## Installation and Setup

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Downloading the Project

1. Clone the repository:

   ```sh
   git clone https://github.com/Almoglevi1/weather-app.git
   cd weather-app
   ```

### Setting Up the Server

1. Navigate to the server directory:

   ```sh
   cd server
   ```

2. Install server dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the `server` directory and add your API key:

    ##### Environment Variable

        WEATHER_API_KEY=Your_API_key

4. Start the server:

   ```sh
   npm start
   ```

   The server will run on `http://localhost:3001`.

### Setting Up the Client

1. Navigate to the client directory:

   ```sh
   cd client
   ```

2. Install client dependencies:

   ```sh
   npm install
   ```

3. Start the client:

   ```sh
   npm start
   ```

   The client will run on `http://localhost:3000`.

## Usage

1. Open your browser and go to `http://localhost:3000`.
2. Enter the name of a city in the input field.
3. Click the "Check" button to fetch and display the current weather information for the specified city.
##
![weatherIcon](https://github.com/user-attachments/assets/4b98adc2-d5cb-461a-9889-55871b4c7b15)
