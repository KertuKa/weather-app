/* eslint-disable react/prop-types */
import {React} from 'react';
import Toggle from 'react-toggle';

export default function Header({weather, handleReset, changeDegree, degree}) {
    return weather && weather.current && weather.current ? (
        <header className="weather-box-header">
            <div className="city-container">
                <button type="arrow-back" className="material-icons arrow" onClick={handleReset}>arrow_back</button>          
                <h1 className="city-name">
                    {weather.timezone ? (
                        weather.timezone.split('/').pop()
                    ) : (
                        <div className="snippet" data-title=".dot-flashing">
                            <div className="dot-flashing"></div>
                        </div>)
                    }
                </h1>  
            </div>
            <span className="toggle-container">
                <label>
                    <Toggle
                        icons={{
                            checked: '°C',
                            unchecked: '°F',
                        }} 
                        onChange={changeDegree}
                        checked={degree===true}
                        unchecked={degree===false}
                    />
                </label>
            </span>
        </header>          
      
    ) :  (
        <div className="snippet" data-title=".dot-flashing">
            <div className="dot-flashing"></div>
        </div>);
}