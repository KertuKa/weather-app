/* eslint-disable react/prop-types */

import {React } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Loader from './Loader';

export default function Weather({ setNoWeatherDegree, setWeatherDegree, setForecast, changeDegree, degree, weatherDegree, noWeatherDegree}) {

    const handleReset = () => {
        setForecast(false);
        localStorage.setItem('forecast', false);
        localStorage.removeItem('weather-degree');
        localStorage.removeItem('no-weather-degree');
        setWeatherDegree({});
        setNoWeatherDegree({});
    };
 

    return weatherDegree ? (
        <div className='weather-box'> 
            <Header
                weather={degree ? weatherDegree : noWeatherDegree}
                handleReset={handleReset}
                degree={degree}
                changeDegree={changeDegree}
            />
            <Main
                weather={degree ? weatherDegree : noWeatherDegree}
            /> 
            <Footer 
                weather={degree ? weatherDegree : noWeatherDegree}
                weatherDegree={weatherDegree}
                noWeatherDegree ={noWeatherDegree}
                degree={degree}
            />  
        </div>
    ) : (
        <Loader/>);
}
