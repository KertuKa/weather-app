/* eslint-disable react/prop-types */
import {React} from 'react';

export default function GeolocationMessage({locatingInfo}) {
    return (
        <div className='location-message-container'>
            <div className='location-message'>{locatingInfo}</div> 
        </div>
    );
}

