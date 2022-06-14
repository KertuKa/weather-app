# weather-app

            

    const getWeather = async () => {
      
    const api = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=59.4372155&lon=24.7453688&appid=3c9121331dd39b253026c6fdc1f91974`);
   // const api = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=3c9121331dd39b253026c6fdc1f91974`);
    //const api = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=3c9121331dd39b253026c6fdc1f91974`);
   
    //const api = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=Tallinn&key=c71ca37362bb4c02973c074aeba1ce60`);
    // const api = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Tallinn&appid=3c9121331dd39b253026c6fdc1f91974`);
      // const api = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Tallinn&appid=3c9121331dd39b253026c6fdc1f91974`);
    setWeather(await api.json())
    console.log(weather);
    };