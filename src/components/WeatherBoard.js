import React, { useEffect, useState } from 'react';
import Search from './Search';
import Weather from './Weather';

const storageWeatherDegree = JSON.parse(localStorage.getItem('weather-degree'));
const storageNoWeatherDegree = JSON.parse(localStorage.getItem('no-weather-degree'));
function WeatherBoard() {

    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [forecast, setForecast] = useState(false);
    const [degree, setDegree] = useState(false);
    const [weatherDegree, setWeatherDegree] = useState({});
    const [noWeatherDegree, setNoWeatherDegree] = useState({});
    const [error, setError] = useState(null);


    const storageForecast = JSON.parse(localStorage.getItem('forecast'));
    

    const changeDegree = () => {
        setDegree(!degree);
        localStorage.setItem('weather-degree', JSON.stringify(storageNoWeatherDegree));
        localStorage.setItem('no-weather-degree', JSON.stringify(storageWeatherDegree));
    };

    useEffect(() => {
        getUserLocation();
    }, []);


    const getUserLocation = () => {
        try{
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation({ longitude: position.coords.longitude, latitude: position.coords.latitude });
            });
        } catch (error) {
            setError(error);
        }
        if (error) {
            return console.log('caught error');
        }
    };
    

    return (
        forecast || storageForecast === true  ?
            <Weather
                weatherDegree={storageWeatherDegree || weatherDegree}
                setForecast={setForecast}
                changeDegree={changeDegree}
                noWeatherDegree={storageNoWeatherDegree || noWeatherDegree}
                degree={degree}
                setNoWeatherDegree={setNoWeatherDegree}
                setWeatherDegree={setWeatherDegree}

            />
            :
            <Search
                setWeatherDegree={setWeatherDegree}
                setNoWeatherDegree={setNoWeatherDegree}
                setForecast={setForecast}
                currentLocation={location}
                degree={degree}
                changeDegree={changeDegree}
                getUserLocation={getUserLocation}
                error = {error}
                setError = {setError}
            />
    );
}


export default WeatherBoard;