/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import {React, useEffect, useState } from 'react';
import SearchField from './SearchField';
import Toggle from 'react-toggle';
import Icons from './Icons';
import moment from 'moment';
import Weather from './Weather';
import { weekdays } from 'moment';


export default function Footer({weather, degree, celsius, fahrenheit}) {

    const time = new Date();

    return weather && weather.current ? (
        <footer className="weather-box-footer">
            <div className="weather-box-footer-item">                
                {weather.daily.slice(0, 7).map((dayTemp, index)=> (
                    <div key={index}> 
                        <h5 className="week-day-name">{(new Date(dayTemp.dt*1000).toLocaleDateString('en-US', { weekday: 'long' }))}</h5> 
              
                        <Icons
                            icon = {dayTemp.weather[0].id}
                        />
                        <h5 className="week-temp">{dayTemp.temp.day}</h5>
                    </div>            
                ))} 
            </div>  
        </footer>            
    ) : (
        <div className="snippet" data-title=".dot-flashing">
            <div className="dot-flashing"></div>
        </div>
    ); 
}