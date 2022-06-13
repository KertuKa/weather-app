import {React, useEffect, useState } from 'react';
import SearchField from './SearchField';
import Toggle from 'react-toggle';
import Icons from './Icons';
import moment from "moment";

export default function Main({weather, celsius, fahrenheit, degree}) {

 const date_create = moment().format("dddd, MMMM Do YYYY");

  return weather && weather.current ? (
       <main className="weather-box-main">
            <div>
                <div>
                    <h1 className="current-date">{date_create}</h1>
                </div>
                <div>
                    <h2 className="description">{weather.current.weather[0].description}</h2> 
                </div> 
                <div className="current-weather-container">
                <div className="temp-icon">
                    <span className="temp">{weather.current.temp}</span>
                    <span className="current-weather-icon">
                        <Icons   
                            icon={weather.current.weather[0].id}                       
                        /> 
                    </span> 
                    </div>  

                <div className="day-temp">
                    <div className="day-times">
                            <p>Morning</p>
                            <p>Day</p>
                            <p>Evening</p>
                            <p>Night</p>    
                    </div>     
                    {weather.daily.slice(0,1).map((dailyTemp, index) => (
                        <div className="daily-temp">
                            <p>{dailyTemp.temp.morn}</p>
                            <p>{dailyTemp.temp.day}</p>
                            <p>{dailyTemp.temp.eve}</p>
                            <p>{dailyTemp.temp.night}</p>
                        </div>
                    )) }  
                    </div>             
                </div> 
                </div>
        </main>
    
  ) : (
    <div className="snippet" data-title=".dot-flashing">
        <div className="dot-flashing"></div>
    </div>)
}