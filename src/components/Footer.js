/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import {React} from 'react';
import Icons from './Icons';



export default function Footer({weather, degree}) {

    return (
        <footer className="weather-box-footer">
            <div className="weather-box-footer-item">                
                {weather.daily.slice(0, 7).map((dayTemp, index)=> (
                    <div key={index}> 
                        <h5 className="week-day-name">{(new Date(dayTemp.dt*1000).toLocaleDateString('en-US', { weekday: 'long' }))}</h5>               
                        <Icons
                            icon = {dayTemp.weather[0].id}
                        />
                        <h5 className="week-temp">{Math.round(dayTemp.temp.day)} {degree}</h5>
                    </div>            
                ))} 
            </div>  
        </footer>            
    ); 
}