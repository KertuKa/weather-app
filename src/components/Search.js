import React, { useState } from 'react';
import axios from 'axios';
import SearchField from './SearchField';
import { useNavigate } from 'react-router-dom';

function Search() {
    const navigate = useNavigate();
    let celsius = false;
    const [fieldError, setFieldError] = useState(false);
    const [locatingInfo, setLocatingInfo] = useState(null);

    const getCityCoords = async (e) => {
        try {
            e.preventDefault();
            const city = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${e.target.elements.city.value}&appid=ce6c8ee3a584065c72dd563549be5531`);
            navigate(`/forecast?latitude=${city.data[0].lat}&longitude=${city.data[0].lon}&celsius=${celsius}`);
        }
        catch (error) {
            setFieldError(true);
        }
    };
 
    
    const getUserLocation = () => {
        if (!navigator.geolocation) {
            setLocatingInfo('Seems like Geolocation is not supported by this browser');
        }
        else {
            setLocatingInfo('Please wait, finding your location');
            navigator.geolocation.getCurrentPosition((position) => {
                setLocatingInfo(null);
                navigate(`/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&celsius=${celsius}`);
            }, () => {
                setLocatingInfo('The Geolocation request was denied');
            });
        }
    };
    

   
    return (
        <SearchField
            getCityCoords={getCityCoords}
            getUserLocation={getUserLocation} 
            fieldError = {fieldError}
            locatingInfo={locatingInfo}
        />  
    );
}

export default Search;