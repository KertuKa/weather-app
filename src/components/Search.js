/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import SearchField from './SearchField';
import { useNavigate } from 'react-router-dom';


function Search({currentLocation}) {
    
    const navigate = useNavigate();
    let celsius = false;

    const getCityCoords = async (e) => {
        e.preventDefault();
        const city = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${e.target.elements.city.value}&appid=f1cbca422b22402359727f7c86831ba8`);
        navigate(`/forecast?latitude=${city.data[0].lat}&longitude=${city.data[0].lon}&celsius=${celsius}`);
    };

    const getUserLocation = () => {
        navigator.geolocation.getCurrentPosition(position => {
            navigate(`/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&celsius=${celsius}`);
        });
    };
 


   
    return (
        <SearchField
            getCityCoords={getCityCoords}
            currentLocation = {currentLocation}
            getUserLocation={getUserLocation} 
        />  
    );
}

export default Search;