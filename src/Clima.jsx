import axios from 'axios';
import { useEffect, useState } from 'react'
import React from 'react';

const Clima = () => {
  const [ weather, setWeather] = useState({});

  useEffect(() => {
  const success = pos => { 
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e8c193886e680b09b8f8bfe6d146328c
    `)
    .then(res => setWeather(res.data));
  }
  
  navigator.geolocation.getCurrentPosition(success);
}, [])

console.log(weather)

const [ change, setChange ] = useState(true);

const degrees = () => {
  alert ("cambio de temperatura")
}

  return (
  <div className='container'>

    <div className="box"> 
  
      <h2 className='name'>{weather.name}, {weather.sys?.country}</h2>
      <h2 className='temp'>
        {change ? weather.main?.temp : (weather.main?.temp - 32)*0.5}
        {" "}
        {change ? "Fahrenheit" : "Celsius"}

        </h2>
      <img className='icon' src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="icon" />
      <button className='degrees' onClick={() => setChange(!change)}>
        Degrees °Fj°C
        </button>
    </div>
  </div>
  );
};

export default Clima;