import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchField from './SearchField';


function Search({setWeather, setForecast, currentLocation, degree}) {
    const [error, setError] = useState(null);
    const [cityName, setCityName] = useState('');

    const getCityCoords = () => {
      axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=3c9121331dd39b253026c6fdc1f91974`)
      .then((response) => 
          getWeather({latitude: response.data[0].lat, longitude: response.data[0].lon})           
      )
      .then(setForecast(true))
  }
      

    const getWeather = async (coords) => { 
      if (degree===true) {
        const data = axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.latitude}&lon=${coords.longitude}&appid=3c9121331dd39b253026c6fdc1f91974&units=metric`)
        .then(response => {
          setWeather(response.data)
          setForecast(true)
      })
      setWeather(data);
    }
       else {
       const data = axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.latitude}&lon=${coords.longitude}&appid=3c9121331dd39b253026c6fdc1f91974&units=imperial`)
        .then(response => {
          setWeather(response.data)
          setForecast(true)
      })
      setWeather(data);

    }
  }
   
  return (
    <SearchField
        getCityCoords={getCityCoords}
        setCityName={setCityName}
        setForecast={setForecast}
        currentLocation = {currentLocation}
        getWeather = {getWeather}   
    />  
  )
}

export default Search;