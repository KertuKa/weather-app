/* eslint-disable react/prop-types */
import React from 'react';


export default function SearchField({ getCityCoords, getUserLocation}) {

    return (
        <div className="weather-box">  
            <div className = "searchfield-container">
                <form className="search-field" onSubmit={e => getCityCoords(e)}>
                    <label>
                        <input type="text" name="city" placeholder="City" className="text-field" />
                    </label>
                    <button type="submit" className= "material-icons search-button">search</button>
                </form>
                <div className="use-location">
                    <h3 className="or-location">or</h3>
                    <div className="use-location-text">
                        <span>use my </span>
                        <button className="current-position" onClick = {() => getUserLocation()}> current position</button>   
                    </div>
                </div>
            </div>
        </div>
    );
}

