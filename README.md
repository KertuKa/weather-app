# weather-app

# Framework

This application was built with [React.js] 

## Running the application

Install the modules by running:

```npm install
```

Run the application locally:
```npm start
```

The application should now run on [http://localhost:3000]

## About the application 

The aim of this application is to return weather data - current and daily temperatures and display weekly forecast. In addition to that the user is able to change the temperature unit (°C and °F). 
There are two options to get the data: entering a city name or clicking on "current position" to get the forecast of the city the User is currently located in.

## How it works

The function navigator.geolocation.getCurrentPosition was used to get user's current location. It returns location coordinates and passes those to getWeather() function which returns the forecast data.

When a specific city is typed in the search field the application first triggers getCityCoords() function to get the city coordinates and then getWeather() to get the data of that specific city.

In addition, localStorage was used to set and get data which allows users to refresh the page without losing the displayed forecast.

## Styling
For the application presentation mainly CSS and SASS were used.

## Mobile view
The appication is responsive and adjusted for smaller screens (max width 600px).

## Some libraries that were used
[react-toggle]
(https://github.com/aaronshaf/react-toggle)





