/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import SearchField from './SearchField';


function Search({setForecast, currentLocation, setWeatherDegree, setNoWeatherDegree, getUserLocation, error, setError}) {
    

    const getCityCoords = (cityName) => {
        try {
            axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=3c9121331dd39b253026c6fdc1f91974`)
                .then((response) => {
                    getWeather({latitude: response.data[0].lat, longitude: response.data[0].lon});           
                    localStorage.setItem('forecast', true);
                }
                );
            setForecast(true);
        } 
        catch (error) {
            setError(error);
        }
        if (error) {
            return console.log('caught error');
        }
    };
      

    const getWeather = async (coords) => { 
        try{
            let endpoints = [
                `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.latitude}&lon=${coords.longitude}&appid=3c9121331dd39b253026c6fdc1f91974&units=metric`,
                `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.latitude}&lon=${coords.longitude}&appid=3c9121331dd39b253026c6fdc1f91974&units=imperial`
            ];
            
            axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
                (response) => 
                {
                    if(response[0].data){
                        setWeatherDegree(response[0].data);
                        setNoWeatherDegree(response[1].data);
                        localStorage.setItem('weather-degree', JSON.stringify(response[0].data));
                        localStorage.setItem('no-weather-degree', JSON.stringify(response[1].data));
                        localStorage.setItem('forecast', true);
                    }
                    setForecast(true);
                 
                },
            );
            
        }catch(err) {
            console.log(err);
        }
       
    };
   
    return (
        <SearchField
            getCityCoords={getCityCoords}
            setForecast={setForecast}
            currentLocation = {currentLocation}
            getWeather = {getWeather}  
            getUserLocation={getUserLocation} 
        />  
    );
}

export default Search;