import React, { useEffect, useState } from 'react';
import moment from "moment";
import Search from './Search';
import Weather from './Weather';



function WeatherBoard() {
    const [weather, setWeather] = useState([]);
    const [location, setLocation] = useState({latitude:null, longitude:null});
    const [forecast, setForecast] = useState(false);
    const [degree, setDegree] = useState(false);
 
    

    const changeDegree = (e) => {
      setDegree(e.target.checked);
    }

        
    useEffect(() => {
      getUserLocation();
      },[]);

    const getUserLocation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
      setLocation({longitude: position.coords.longitude, latitude: position.coords.latitude});
        })
    }; 

  return (   
        forecast ? 
        <Weather
            weather={weather}
            setForecast={setForecast}
            changeDegree={changeDegree}
            degree={degree}
            /> 
        : 
        <Search
            setWeather={setWeather}
            setForecast ={setForecast}
            currentLocation = {location}
            degree={degree}
            />  
  )
}


export default WeatherBoard;