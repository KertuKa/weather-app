/* eslint-disable react/prop-types */
import {React } from 'react';
import Header from './Header';
// import Main from './Main';
// import Footer from './Footer';

export default function Weather({changeDegree, weather}) {


    return (
        <div className='weather-box'> 
            <Header
                changeDegree={changeDegree}
                weather={weather}
            /> 
            {/*            <Main
                currentTemp={currentTemp}
                changeDegree={changeDegree}
            /> 
            <Footer 
                currentTemp={currentTemp}
            />  */}
        </div>
    );
}
