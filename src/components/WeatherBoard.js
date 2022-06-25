import React, { useEffect, useState } from 'react';
import Search from './Search';
import Weather from './Weather';
import { useSearchParams  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



function WeatherBoard() {
    const navigate = useNavigate();
    const [weather, setWeather] = useState(0);
    const [params, setParams] = useSearchParams();
    const latitude = params.get('latitude');
    const longitude = params.get('longitude');
    let celsius = params.get('celsius') === 'true';
    let forecastData = {};
    

    const changeDegree = () => {
        params.set('celsius', !celsius);
        setParams(params);
        celsius = !celsius;
        getWeather();
    };

    
    useEffect(() => {
        if(!latitude || !longitude) {
            navigate('/');
        }
        getWeather();
    });

    async function getWeather() {
        const forecastData = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=f1cbca422b22402359727f7c86831ba8&units=${celsius? 'metric' : 'imperial'}`);
        setWeather(forecastData.data);
    }

    return (
        forecastData ?
            <Weather
                changeDegree={changeDegree}
                weather={weather}
            />
            :
            <Search
                changeDegree={changeDegree}
            />
    );
}


export default WeatherBoard;