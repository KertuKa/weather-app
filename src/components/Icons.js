import React, { Component, useState } from 'react'

export default function Icons(props) {
const {weather, icon} = props;

    return (     
      <div classNames="week-icon-items">      
      <i className={icon <= 232 ? "week-icons wi wi-thunderstorm" 
            : icon >= 300 && icon <=321 ? "week-icons wi wi-sprinkle"
            : icon >= 500 && icon <=531 ? "week-icons wi wi-rain"
            : icon >= 600 && icon <=622 ? "week-icons wi wi-snow"
            : icon >= 701 && icon <=781 ? "week-icons wi wi-fog"
            : icon === 800 ? "week-icons wi wi-day-sunny"
            : icon >= 801 && icon <=804 ? "week-icons wi wi-cloudy"
            : "wi wi-cloud"}/>    
      </div>      
              
    )
        
  }

