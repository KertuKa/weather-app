/* eslint-disable react/prop-types */
import {React} from 'react';
import Toggle from 'react-toggle';

export default function Header({weather, handleReset, changeDegree, degree}) {

    return weather ? (
        <header className="weather-box-header">
            <div className="city-container">
                <button type="arrow-back" className="material-icons arrow" onClick={handleReset}>arrow_back</button>          
                <h1 className="city-name">
                    {weather.timezone ? (
                        weather.timezone.split('/').pop().replace('_' ,' ')
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
                        checked={degree===true }
                        unchecked={degree===false}
                    />
                </label>
            </span>
        </header>               
    ) :  (
        <div className="header-error-message">Something went wrong. Could not load the city name and back arrow... In order to get back to the search field please restart the app</div>);
}