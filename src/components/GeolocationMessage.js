import {React} from 'react';
import PropTypes from 'prop-types';

GeolocationMessage.propTypes = {
    locatingInfo: PropTypes.string,
};

export default function GeolocationMessage({locatingInfo}) {
    return (
        <div className='location-message-container'>
            <div className='location-message'>{locatingInfo}</div> 
        </div>
    );
}

