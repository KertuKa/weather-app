/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import {React} from 'react';
import Icons from './Icons';
import moment from 'moment';

export default function Main({weather, degree}) {
    const date_create = moment().format('dddd, MMMM Do YYYY');

    return (
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
                        <span className="temp">{Math.round(weather.current.temp)}{degree}</span>
                        <span className="current-weather-icon">
                            <Icons   
                                icon={weather.current.weather[0].id}                       
                            /> 
                        </span> 
                    </div>  
                    <div className="day-temp">
                        <ul className="day-times">
                            <li>Morning</li>
                            <li>Day</li>
                            <li>Evening</li>
                            <li>Night</li>    
                        </ul>     
                        {weather.daily.slice(0,1).map((dailyTemp, index) => (
                            <ul key={index} className="daily-temp">
                                <li>{Math.round(dailyTemp.temp.morn)} {degree}</li>
                                <li>{Math.round(dailyTemp.temp.day)} {degree}</li>
                                <li>{Math.round(dailyTemp.temp.eve)} {degree}</li>
                                <li>{Math.round(dailyTemp.temp.night)} {degree}</li>
                            </ul>
                        )) }  
                    </div>             
                </div> 
            </div>
        </main>
    
    );
}