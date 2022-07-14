import { motion } from "framer-motion";
import React, { useEffect, useState, useContext } from "react";
import { TiWeatherSunny } from "react-icons/ti";
import { User } from "../Contexts/UserContext";

const Weather = () => {
  const [weather, setWeather] = useState();
  const [details, setDetails] = useState(false); //toggle the detailed weather component if it's toggle state is set to true
  const [shorts, setShorts] = useState("Rome"); //Stores the one line status of weather

  const { user } = useContext(User);

  const getWeather = () => {
    // console.log(shorts)
    // Url to fetch the real time weather location as per the user's location
    setShorts("Loading!");
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${user.apiKey}&q=${user.currLocation}&days=1&aqi=no&alerts=no`
    )
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        setShorts(user.currLocation);
        return res.json();
      })
      .then((data) => setWeather(data))
      .catch((err) => {
        setWeather("Location not found");
      });
  };

  useEffect(() => {
    // Fetching the weather on initial loading of the page
    getWeather();
    // eslint-disable-next-lineet
  }, []);

  //Fire a useEffect with the updated data as soon as the location is changed in the local storage by settings component
  useEffect(() => {
    //Get the new weather
    setShorts(user.currLocation); //update the short weathe details
    getWeather(); //Fetch the weather as per the updated location
    console.log("User useEffect called");
    // eslint-disable-next-line
  }, [user.currLocation]); //User is an object with one parameter as user.currLocations

  // Function to set the toggle state of the detailed weather component
  function toggleDetails() {
    setDetails(!details);
  }

  return (
    <div className="text-white main_container relative">
      {/* For people who havent configured weather we have this button */}
      <div className="weather_div">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="border-2 bg-black bg-opacity-60 border-white rounded-full w-40 py-1 flex items-center justify-evenly hover:bg-white hover:bg-opacity-30"
          onClick={toggleDetails}
        >
          {shorts}
          <TiWeatherSunny />
        </motion.button>
        {/* Show the weather if the toggle state is true */}
        {weather ? (
          weather === "Location not found" ? (
            <div
              className={`search_container mt-1 absolute bg-black bg-opacity-60 w-auto h-auto px-2 py-3 rounded-lg ${
                details ? "block" : "hidden"
              }`}
            >
              <p>Location not found</p>
            </div>
          ) : (
            <div
              className={`search_container mt-1 absolute bg-black bg-opacity-60 shadow-2xl w-auto h-auto px-2 py-3 rounded-lg ${
                details ? "block" : "hidden"
              }`}
            >
              <div className="search_bar flex justify-center items-center w-40 flex-col">
                <img src={"https:" + weather.current.condition.icon} alt="" />
                <h1>{weather.current.temp_c} Degrees</h1>
                <h1 className="text-[12px]">
                  {weather.current.condition.text}
                </h1>
                <h1 className="text-[8px]">
                  Last Updated: {weather.current.last_updated}
                </h1>
              </div>
            </div>
          )
        ) : null}
      </div>
    </div>
  );
};

export default Weather;
