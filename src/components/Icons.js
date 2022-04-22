import React, { Component, useState } from 'react'

export default function Icons(props) {
const {weather} = props;

    return (
          <i className={weather.list[0].weather[0].id <= 232 ? "wi wi-thunderstorm" 
          : weather.list[0].weather[0].id >= 300 && weather.list[0].weather[0].id <=321 ? "wi wi-sprinkle"
          : weather.list[0].weather[0].id >= 500 && weather.list[0].weather[0].id <=521 ? "wi wi-rain"
          : weather.list[0].weather[0].id >= 600 && weather.list[0].weather[0].id <=622 ? "wi wi-snow"
          : weather.list[0].weather[0].id >= 701 && weather.list[0].weather[0].id <=781 ? "wi wi-fog"
          : weather.list[0].weather[0].id === 800 ? "wi wi-day-sunny"
          : weather.list[0].weather[0].id >= 801 && weather.list[0].weather[0].id <=804 ? "wi wi-cloudy"
          : "wi wi-cloud"}/>                     
    )
        
  }

