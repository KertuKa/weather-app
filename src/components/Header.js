import {React} from 'react';
import Toggle from 'react-toggle';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

Header.propTypes = {
    weather: PropTypes.object,
    changeDegree: PropTypes.func,
    celsius: PropTypes.bool,
};


export default function Header({weather, changeDegree, celsius}) {
    
    const navigate = useNavigate();
    const navigateBack = () => {
        navigate('/');
    };
 
    return (
        <header className="weather-box-header">
            <div className="city-container">
                <button type="arrow-back" className="material-icons arrow" onClick={navigateBack}>arrow_back</button>          
                <h1 className="city-name">
                    {weather.timezone.split('/').pop().replace('_' ,' ')}
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
                        checked={celsius}
                        unchecked={!celsius}
                    />
                </label>
            </span>
        </header>               
    );
}