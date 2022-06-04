import React, { useEffect, useState, useContext } from "react";
import { TiWeatherSunny } from "react-icons/ti";
import { User } from "../Contexts/UserContext";

const Weather = () => {
  const [weather, setWeather] = useState()
  const [details, setDetails] = useState(false) //toggle the detailed weather component if it's toggle state is set to true
  var currLocation = localStorage.getItem('currLocation') //Get the current location from localstorage
  const [shorts, setShorts] = useState(currLocation) //Stores the one line status of weather

const {user} = useContext(User);

const getWeather = async() =>{
    const response = await fetch(baseURL)
    const data = await response.json();
    setWeather(data)
    };

  // Url to fetch the real time weather location as per the user's location 
  const baseURL = `https://api.weatherapi.com/v1/forecast.json?key=f3d41b9faf0b4d679ad132824223005&q=${currLocation}&days=1&aqi=no&alerts=no`;

  useEffect(() => {
    // Fetching the weather on initial loading of the page
    getWeather();
}, []);

//Fire a useEffect with the updated data as soon as the location is changed in the local storage by settings component
useEffect(() => {
  currLocation = localStorage.getItem('currLocation') //Get the new weather
  getWeather() //Fetch the weather as per the updated location
  setShorts(currLocation) //update the short weathe details
}, [user]) //User is an object with one parameter as user.currLocation

// Function to set the toggle state of the detailed weather component 
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

  return (
    <div className="text-white main_container relative">
      {/* For people who havent configured weather we have this button */}
      <div className="unconfigured">
        <button className="border-2 bg-black bg-opacity-40 border-white rounded-full w-40 py-1 flex items-center justify-evenly" onClick={toggleDetails}>
          {shorts}
          <TiWeatherSunny />
        </button>
        {/* Show the weather if the toggle state is true */}
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
