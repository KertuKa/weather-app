/* eslint-disable react/prop-types */
import React, { useState } from 'react';


export default function SearchField({ getCityCoords, currentLocation, getWeather}) {
    const [cityName, setCityName] = useState('');
    return (
        <div className="weather-box">  
            <div className = "searchfield-container">
                <form className="search-field"> 
                    <input className="text-field" type="text" placeholder="City" onChange={e => setCityName(e.target.value)}/>
                    <button type="submit" className="material-icons search-button" onClick={() => getCityCoords(cityName)}>search</button>
                </form>
                <div className="use-location">
                    <h3 className="or-location">or</h3>
                    <div className="use-location-text">
                        <span>use my </span>
                        <button className="current-position" onClick = {() => getWeather(currentLocation)}> current position</button>   
                    </div>
                </div>
            </div>
        </div>
    );
}

