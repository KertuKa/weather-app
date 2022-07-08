import {React} from 'react';
import Icons from './Icons';
import PropTypes from 'prop-types';

Footer.propTypes = {
    weather: PropTypes.object,
    degree: PropTypes.string,
};


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