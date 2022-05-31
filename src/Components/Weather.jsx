import React, { useEffect, useState, useContext } from "react";
import { TiWeatherSunny } from "react-icons/ti";


const Weather = () => {
  const [weather, setWeather] = useState()
  const [details, setDetails] = useState(false)
  const currLocation = localStorage.getItem('currLocation')
  const [shorts, setShorts] = useState(currLocation)

const getWeather = async() =>{
    const response = await fetch(baseURL)
    const data = await response.json();
    setWeather(data)
    // setInterval(()=>{
    //   weatherMsg(data);
    // },5000)
    };

  const baseURL = `https://api.weatherapi.com/v1/forecast.json?key=f3d41b9faf0b4d679ad132824223005&q=${currLocation}&days=1&aqi=no&alerts=no`;

  useEffect(() => {
    getWeather()
}, []);

function toggleDetails(){
if(details)
{
  setDetails(false)
}
else
{
  setDetails(true)
}
}

// function weatherMsg(data)
// {
//   var loc = currLocation
//   var weatherCondition = data.current.condition.text
//   var temp = data.current.temp_c

//   console.log(shorts)

//   if(shorts == loc)
//     {
//       setShorts(weatherCondition)
//     }
//   else if(shorts == weatherCondition)
//     {
//       setShorts(temp)
//     }
//   else
//     {
//       setShorts(currLocation)
//     }
// }

  return (
    <div className="text-white main_container relative">
      {/* For people who havent configured weather we have this button */}
      <div className="unconfigured">
        <button className="border-2 bg-black bg-opacity-40 border-white rounded-full w-40 py-1 flex items-center justify-evenly" onClick={toggleDetails}>
          {shorts}
          <TiWeatherSunny />
        </button>
        {(weather)?<div className={`search_container mt-1 absolute bg-black bg-opacity-40 w-auto h-auto px-2 py-3 rounded-lg ${(details)?'block':'hidden'}`}>
          <div className="search_bar flex justify-center items-center w-40 flex-col">
           <img src={weather.current.condition.icon} alt="" />
           <h1>{weather.current.temp_c} Degrees</h1>
           <h1 className="text-[12px]">{weather.current.condition.text}</h1>
           <h1 className="text-[8px]">Last Updated: {weather.current.last_updated}</h1>
          </div>
        </div>:<p>loaded</p>}
      </div>
    </div>
  );
};

export default Weather;
