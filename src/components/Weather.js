
import {React, useState } from 'react';
import SearchField from './SearchField';
import Toggle from 'react-toggle';
import Icons from './Icons';
import moment from "moment";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default function Weather({weather, setForecast, changeDegree, degree}) {
/*   const fahrenheit = Math.round(weather.current.temp)
  const celsius = Math.round((fahrenheit - 32) * 5/9) */


  const handleReset = () => {
    setForecast(false);
}

  return weather && weather.current ? (
    <div className="weather-box"> 
 <Header
   weather={weather}
   handleReset={handleReset}
   degree={degree}
   changeDegree={changeDegree}
 />
  <Main
   weather={weather}
   degree={degree}

 /> 
 <Footer 
   weather={weather}
  degree={degree}
 />  
 </div>
  ) : (
    <div className="snippet" data-title=".dot-flashing">
        <div className="dot-flashing"></div>
    </div>)
}
