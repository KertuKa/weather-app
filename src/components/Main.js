/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import {React} from 'react';
//import Icons from './Icons';
import moment from 'moment';

export default function Main({currentTemp}) {

    const date_create = moment().format('dddd, MMMM Do YYYY');

    return (
        <main className="weather-box-main">
            <div>
                <div>
                    <h1 className="current-date">{date_create}</h1>
                </div>
                <div>
                    {/* <h2 className="description">{weather.current.weather[0].description}</h2>  */}
                </div> 
                <div className="current-weather-container">
                    <div className="temp-icon">
                        <span className="temp">{Math.round(currentTemp)}</span>
                        {/*             <span className="current-weather-icon">
                            <Icons   
                                icon={weather.current.weather[0].id}                       
                            /> 
                        </span>  */}
                    </div>  

                    <div className="day-temp">
                        <div className="day-times">
                            <p>Morning</p>
                            <p>Day</p>
                            <p>Evening</p>
                            <p>Night</p>    
                        </div>     
                        {/*          {weather.daily.slice(0,1).map((dailyTemp, index) => (
                            <div key={index} className="daily-temp">
                                <p>{Math.round(dailyTemp.temp.morn)}</p>
                                <p>{Math.round(dailyTemp.temp.day)}</p>
                                <p>{Math.round(dailyTemp.temp.eve)}</p>
                                <p>{Math.round(dailyTemp.temp.night)}</p>
                            </div>
                        )) }  */} 
                    </div>             
                </div> 
            </div>
        </main>
    
    );
}