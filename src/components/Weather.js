import {React } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Loader from './Loader';
import PropTypes from 'prop-types';
import ErrorPage from './ErrorPage';

Weather.propTypes = {
    changeDegree: PropTypes.func,
    weather: PropTypes.object,
    degree: PropTypes.string,
    celsius: PropTypes.bool,
    isFetching: PropTypes.bool,
    error: PropTypes.string,
};


export default function Weather({changeDegree, weather, degree, celsius, isFetching, error}) {

    return weather && !isFetching ? (
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
    ) :  !weather && isFetching 
        ? <Loader/> 
        : <ErrorPage
            error={error}
        />;
}
