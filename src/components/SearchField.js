import React from 'react';
import GeolocationMessage from './GeolocationMessage';
import PropTypes from 'prop-types';

SearchField.propTypes = {
    getCityCoords: PropTypes.func,
    getUserLocation: PropTypes.func,
    fieldError: PropTypes.bool,
    locatingInfo: PropTypes.string,
};


export default function SearchField({ getCityCoords, getUserLocation, fieldError, locatingInfo}) {

    return (
        <div className="weather-box">  
            { locatingInfo ?
                <GeolocationMessage
                    locatingInfo={locatingInfo}
                />
                : <div className = "searchfield-container">
                    <section>
                        <form className="form__input" onSubmit={e => getCityCoords(e)}>
                            <label>
                                <input type="text" name="city" placeholder="City" className="text-field"/>
                            </label>
                            <button type="submit" className= "material-icons form__submit">search</button>
                        </form>
                        {fieldError ? 
                            <div className="field-error">please enter a city name</div>                    
                            : '' }
                    </section>
                    <section>
                        <div className="use-location">
                            <h3 className="use-location-or">or</h3>
                            <div className="use-location__text">
                                <span>use my </span>
                                <button className="current-position" onClick = {() => getUserLocation()}> current position</button>   
                            </div>
                        </div>
                    </section>
                </div>
            }
        </div>
    );
}

