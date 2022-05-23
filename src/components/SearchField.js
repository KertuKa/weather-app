import React from 'react';

export default function SearchField(props) {
  const { getUserLocation, query , search, setQuery} = props;
  return (
    <div className = "searchfield-container">
        <form className="search-field"  onClick={search}> 
          <input className="text-field" type="text" placeholder="City" onChange={e => setQuery(e.target.value)} value={query}/>
          <button type="submit" className="material-icons search-button">search</button>
        </form>
      <div className="use-location">
        <h3>or</h3>
      <div className="use-location-text">
        <span>use my </span>
        <button className="current-position" onClick = {getUserLocation}> current position</button>   
      </div>
      </div>
    </div>
  )
}

