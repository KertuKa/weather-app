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


    console.log(weatherDegree, storageNoWeatherDegree, noWeatherDegree, '<===śtorages');


    const changeDegree = () => {
        setDegree(!degree);
        localStorage.setItem('weather-degree', JSON.stringify(storageNoWeatherDegree));
        localStorage.setItem('no-weather-degree', JSON.stringify(storageWeatherDegree));
    };

    useEffect(() => {
        getUserLocation();
    }, []);

    const getUserLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLocation({ longitude: position.coords.longitude, latitude: position.coords.latitude });
        });
    };


    const storageForecast = JSON.parse(localStorage.getItem('forecast'));


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
            />
    );
}


export default WeatherBoard;