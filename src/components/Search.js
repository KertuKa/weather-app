/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import SearchField from './SearchField';


function Search({setForecast, currentLocation, setWeatherDegree, setNoWeatherDegree, getUserLocation}) {
    

    const getCityCoords = (cityName) => {
        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=3c9121331dd39b253026c6fdc1f91974`)
            .then((response) => {
                getWeather({latitude: response.data[0].lat, longitude: response.data[0].lon});           
                localStorage.setItem('forecast', true);
            }
            );
        setForecast(true);
       
    };
      

    const getWeather = async (coords) => { 
        console.log(coords, 'čoords from api');
        try{
            let endpoints = [
                `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.latitude}&lon=${coords.longitude}&appid=3c9121331dd39b253026c6fdc1f91974&units=metric`,
                `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.latitude}&lon=${coords.longitude}&appid=3c9121331dd39b253026c6fdc1f91974&units=imperial`
            ];
        
            axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
                (response) => 
                {
                    if(response[0].data){
                        console.log(response, '~data from api'),
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
       
        /*  if (degree===true) {

            const data = axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.latitude}&lon=${coords.longitude}&appid=3c9121331dd39b253026c6fdc1f91974&units=metric`)
                .then(response => {
                    setWeather(response.data);
                    setForecast(true);
                });
            setWeather(data);
        }
        else {
            const data = axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.latitude}&lon=${coords.longitude}&appid=3c9121331dd39b253026c6fdc1f91974&units=imperial`)
                .then(response => {
                    setWeather(response.data);
                    setForecast(true);
                });
            setWeather(data);

        } */
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