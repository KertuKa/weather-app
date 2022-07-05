/* eslint-disable react/prop-types */
import {React } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Loader from './Loader';

export default function Weather({changeDegree, weather, degree, celsius}) {

    return weather ? (
        <div className='weather-box'> 
            <Header
                changeDegree={changeDegree}
                weather={weather}
                celsius={celsius}
            /> 
            <Main
                changeDegree={changeDegree}
                weather = {weather}
                degree = {degree}
            /> 
            <Footer 
                weather={weather}
                degree = {degree}
            />  
        </div>
    ) : 
        <Loader/>;
}
