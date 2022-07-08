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

When the page is refreshed the router navigates the user on the same page without losing the fetched data.

Please note that the application is not capable of finding forecast for smaller cities and works mainly with capial cities.

## Styling
For the application presentation mainly CSS and SASS were used.

## Mobile view
The application is responsive and adjusted for smaller screens (max width 600px).

## Libraries that were used
[prop-types]
https://www.npmjs.com/package/prop-types

[react-toggle]
(https://github.com/aaronshaf/react-toggle) 
(Made some refactoring)

## Additional information
'cssnano' compression tool was installed to provide a possiblity to minify and compress the CSS of the application
'postcss preset env' was installed to minimize any issues with the application styling in different browsers (currently commented out in postcss.config.js file)





