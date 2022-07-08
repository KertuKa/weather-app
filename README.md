# weather-app

# Framework

This application was built with [React.js] 

## Running the application

Install the modules by running:
```
npm install
```

Run the application locally:
```
npm start
```

The application should now run on [http://localhost:3000]

## About the application 

The aim of this application is to return weather data - current and daily temperatures and display weekly forecast. In addition to that the user is able to change the temperature unit (°C and °F). 
There are two options to get the data: entering a city name or clicking on "current position" to get the forecast of the city the User is currently located in.

SearchField: This is the first page where the user can type in a city or use their own location to get weather info.

Search: This component has two functions - getting user location (getUserLocation) when the user clicks "use my current position" or when the city is typed in to the search field it will trigger getCityCoords that will get the coordinates for the specified city.

Weatherboard:The coordinates from those two functions are passed into this component and getWeather function will fetch the weather data.

Weather: Is the intermediate link of 3 other components - Header, Main, Footer. They all display different data on the main board.

## How the app works

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
(https://www.npmjs.com/package/prop-types)

[react-toggle]
(https://github.com/aaronshaf/react-toggle) 
Made some refactoring

## Additional information
'cssnano' compression tool was installed to provide a possiblity to minify and compress the CSS of the application
'postcss preset env' was installed to minimize any issues with the application styling in different browsers (currently commented out in postcss.config.js file)

The api key should be in a separate file and used as a variable in a project however, I left the key visible in this project for testing purposes.




