import React, { useEffect, useState } from 'react';
import Weather from './Weather';
import { useSearchParams  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function WeatherBoard() {
    const navigate = useNavigate();
    const [weather, setWeather] = useState(0);
    const [params, setParams] = useSearchParams();
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(null);
    const latitude = params.get('latitude');
    const longitude = params.get('longitude');
    let celsius = params.get('celsius') === 'true';
    const degree = celsius ? '°C' : '°F';


    const changeDegree = () => {
        params.set('celsius', !celsius);
        setParams(params);
        celsius = !celsius;
    };

    
    useEffect(() => {
        if(!latitude || !longitude) {
            navigate('/');
        }
        getWeather();
    }, [params]);


    async function getWeather() {   
        try { const forecastData = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=ce6c8ee3a584065c72dd563549be5531&units=${celsius? 'metric' : 'imperial'}`);   
            setWeather(forecastData.data); 
            setIsFetching(false);
            setError(null);
        } catch (error)   {
            setIsFetching(false);
            setError('Something went wrong. Could not fetch the data');
        }
    }  
      

    return (
        <Weather
            changeDegree={changeDegree}
            weather={weather}
            degree = {degree}
            celsius = {celsius}
            isFetching = {isFetching}
            error = {error}
        />
    );
}


export default WeatherBoard;