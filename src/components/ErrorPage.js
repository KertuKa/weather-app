import {React} from 'react';
import PropTypes from 'prop-types';

ErrorPage.propTypes = {
    error: PropTypes.string,
};

export default function ErrorPage({error}) {
    return (
        <div className='weather-box'>
            <div className="error-page">{error}</div>          
        </div>
    );
}

