import {React} from 'react';
import Icons from './Icons';
import moment from 'moment';
import PropTypes from 'prop-types';

Main.propTypes = {
    weather: PropTypes.object,
    degree: PropTypes.string,
};

export default function Main({weather, degree}) {
    const currentDate = moment().format('dddd, MMMM Do YYYY');

    return (
        <main className="weather-box-main">
            <section>
                <div>
                    <h1 className="current-date">{currentDate}</h1>
                </div>
                <div>
                    <h2 className="weather-description">{weather.current.weather[0].description}</h2> 
                </div> 
            </section>
            <div className="current-weather-container">
                <section>
                    <div className="current-weather">
                        <span className="current-weather-temp">{Math.round(weather.current.temp)}{degree}</span>
                        <span className="current-weather-icon">
                            <Icons   
                                icon={weather.current.weather[0].id}                       
                            /> 
                        </span> 
                    </div>  
                </section>
                <section>
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
                </section>           
            </div> 
        </main> 
    );
}