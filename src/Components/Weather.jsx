import React, { useEffect, useState } from "react";
import { TiWeatherSunny } from "react-icons/ti";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";

const Weather = () => {
  function getWeather() {
    axios.get(baseURL).then((response) => {
      setLocation(response.data.current);
    });
  }

  const [location, setLocation] = useState();

  const baseURL = `hsttps://api.weatherapi.com/v1/forecast.json?key=f3d41b9faf0b4d679ad132824223005&q=${location}&days=1&aqi=no&alerts=no`;

  useEffect(() => {}, []);

  return (
    <div className="text-white main_container relative">
      {/* For people who havent configured weather we have this button */}
      <div className="unconfigured">
        <button className="border-2 border-white rounded-full w-40 py-1 flex items-center justify-evenly">
          Add Location
          <TiWeatherSunny />
        </button>
        <div className="search_container mt-1 absolute bg-black w-44 h-40 rounded-lg opacity-40">
          <div className="search_bar flex justify-center items-center">
            <input
              className="bg-transparent w-32 my-2 focus:outline-none focus:border-b-[1px] focus:border-white"
              type="text"
              name="location"
              id="location"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
            <AiOutlineSearch type="submit" onClick={(e)=>{
              console.log(e.target.value)
            }}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
