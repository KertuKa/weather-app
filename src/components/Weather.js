import React from 'react'
import Icons from './Icons';
import moment from "moment";

export default function Weather({temp, icon}) {

  return (
    <div className="weather-box-footer-item">
      <div>
        <h5 className="week-day-name">Sunday</h5>
      </div>
        <Icons
          icon = {icon}
        />
        <h5 className="week-temp">{temp}</h5>
    </div>
  )
  
}
