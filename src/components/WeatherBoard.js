import React, { useEffect, useState } from 'react';
import moment from "moment";
import Icons from './Icons';
import Weather from './Weather';
import SearchField from './SearchField';
import Toggle from 'react-toggle';
import axios from 'axios';


function WeatherBoard() {
    const date_create = moment().format("dddd, MMMM Do YYYY");
    const today = moment().format("dddd");
    const [weather, setWeather] = useState([]);
    const [query, setQuery] = useState("");
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');


/*   useEffect(() => {
    getCoordinates();
   //getUserLocation()

 },[query]);  */

 useEffect(() => {
    //getUserLocation();
    search();
 },[]);


 const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
    setLongitude(position.coords.longitude);
    setLatitude(position.coords.latitude);
      console.log(latitude);
    }) 
      axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=3c9121331dd39b253026c6fdc1f91974`)
      .then((response) => {
          setWeather(response.data);
      })
  }; 
 
    const search = () => {
        {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=3c9121331dd39b253026c6fdc1f91974`)
        .then (response => response.json()) 
        .then((data) => {
          setWeather(data[0]);
         // setQuery("");
         // console.log(data[0].name);    
          setLatitude(weather.lat); 
          setLongitude(weather.lon);
      })}
      axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=3c9121331dd39b253026c6fdc1f91974`)
      .then((response) => {
          setWeather(response.data);
      })
    };

    

    const getWeather = async () => {
   
    const api = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=59.4372155&lon=24.7453688&appid=3c9121331dd39b253026c6fdc1f91974`);
   // const api = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=3c9121331dd39b253026c6fdc1f91974`);
    //const api = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=3c9121331dd39b253026c6fdc1f91974`);
   
    //const api = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=Tallinn&key=c71ca37362bb4c02973c074aeba1ce60`);
    // const api = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Tallinn&appid=3c9121331dd39b253026c6fdc1f91974`);
      // const api = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Tallinn&appid=3c9121331dd39b253026c6fdc1f91974`);
    setWeather(await api.json())
    console.log(weather);
    
    }; 



   
  return weather && weather.current ? (
    <div className="weather-box">
        <div className="weather-box-header">
            <div className="arrow-container">
                <button type="arrow-back" className="material-icons arrow">arrow_back</button>
            </div>
                <h1 className="city-name">{weather.timezone}</h1>  
            <span className="toggle-container">
            <label>
        <Toggle
         icons={{
            checked: "°C",
            unchecked: "°F",
             }}/>
            </label>
            </span>
        </div>
 
        <div className="weather-box-main">
            <div>
                <div>
                    <h1 className="current-date">{date_create}</h1>
                </div>
            <div>
                    <h2 className="description">{weather.current.weather[0].description}</h2>
            </div> 
                <div className="current-weather-container">
                    <span className="temp">{weather.current.temp}</span> 
                    <span className="current-weather-icon">
                        <Icons   
                        icon={weather.current.weather[0].id}                       
                        /> 
                    </span>    
                    <span className="daily-temp">
                            <h4>Morning</h4>
                            <h4>Day</h4>
                            <h4>Evening</h4>
                            <h4>Night</h4>
                    </span>         
                    {weather.daily.slice(0,1).map((dailyTemp, index) => (
                        <span className="daily-temp">
                            <h4>{dailyTemp.temp.morn}</h4>
                            <h4>{dailyTemp.temp.day}</h4>
                            <h4>{dailyTemp.temp.eve}</h4>
                            <h4>{dailyTemp.temp.night}</h4>
                        </span>
                    ))}    
                      
                </div>
            </div> 
            </div>
        <div className="weather-box-footer">
            <div>
            <div className="weather-box-footer-item">
                <h5 className="week-day-name">{today}</h5>
                    <Icons
                    icon={weather.current.weather[0].id}
                    />
                    <h5 className="week-temp">{weather.current.temp}</h5>
                </div>
            </div>
                {weather.daily.slice(0, 6).map((dayTemp, index)=> (
                    <Weather 
                        weather = {weather}
                        temp={dayTemp.temp.day}
                        icon={dayTemp.weather[0].id}
                        key={index}
                        />
                    ))} 
        </div>               
    </div>
  )
 : 
    <div className="weather-box">      
        <SearchField
                search = {search}
                query = {query}
                setQuery = {setQuery}
               getUserLocation = {getUserLocation}     
            />  
        
    </div>

}


export default WeatherBoard;