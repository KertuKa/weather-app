import React, { useEffect, useState } from 'react';
import moment from "moment";
import Toggle from './Toggle';
import Icons from './Icons';
import axios from "axios";
import { isCompositeComponent, scryRenderedComponentsWithType } from 'react-dom/test-utils';


function Weather() {
    const date_create = moment().format("dddd, MMMM Do YYYY")
    const first_week_day = moment().add(0, 'days').format("dddd");
    const second_week_day = moment().add(1, 'days').format("dddd");
    const third_week_day = moment().add(2, 'days').format("dddd");
    const forth_week_day = moment().add(3, 'days').format("dddd");
    const fifth_week_day = moment().add(4, 'days').format("dddd");
    const [weather, setWeather] = useState([]);
 

    useEffect(() => {
        getWeather();
    },[]);



    const getWeather = async () => {
        
        const api = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Tallinn&cnt=&appid=3c9121331dd39b253026c6fdc1f91974`);
        
         
        setWeather(await api.json())
        // console.log(weather.city.coord);
        // console.log(weather.city);
        // console.log(weather.list);
        console.log(weather.list);
       
    }

 
//weather.list &&
  return weather.list && (
    <div className="weather-box">
    {/* <h1>{weather.city.name}</h1> */}
    <div className="weather-box-header">
    <h1 className="city-name">{weather.city.name}</h1>
    <Toggle/>
    </div>
    <div className="weather-box-main">
    <h1 className="current-date">{date_create}</h1>
    <div>
    <h2 className="description">{weather.list[0].weather[0].description}</h2>
    </div>
    {/* {weather.list.main ? <h1>{weather.list.main.temp}</h1> : null} */}
    { <h3 className="temp">{weather.list[0].main.temp}</h3> }
    <Icons
        weather={weather}
    />
    <div>
        <h4></h4>
    </div>
    </div>
    <div className="weather-box-footer">
        <h5>{first_week_day}</h5>
        <h5>{second_week_day}</h5>
        <h5>{third_week_day}</h5>
        <h5>{forth_week_day}</h5>
        <h5>{fifth_week_day}</h5>
    </div>
    </div>
  )
}




export default Weather;