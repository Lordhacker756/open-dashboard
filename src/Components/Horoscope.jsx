import React from "react";
import { useRef, useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import moment from "moment";

const Horoscope = ({ setHoroscopeState }) => {
  const [horoscope, setHoroscope] = useState("Fetching!");
  const [zodiac, setZodiac] = useState();
  const zodiacRef = useRef();

  function getHoroscope() {
    const options = {
      method: "GET",
      url: `https://astro-daily-live-horoscope.p.rapidapi.com/horoscope/libra/today`,
      headers: {
        "X-RapidAPI-Key": "7ecbb931fdmsh6e7eb3941e1e170p173b9fjsn303cac876f16",
        "X-RapidAPI-Host": "astro-daily-live-horoscope.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        var horoscopeToday = Object.values(response.data)[0];
        setHoroscope(horoscopeToday);
        localStorage.setItem("Horoscope", JSON.stringify(horoscopeToday));
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  useEffect(() => {
    var checkZodiac = localStorage.getItem("Zodiac");
    var checkHoroscope = localStorage.getItem("Horoscope");
    if (checkZodiac) {
      setZodiac(JSON.parse(checkZodiac));
      if (checkHoroscope === "Fetching" || !checkHoroscope) {
        getHoroscope();
      } else {
        setHoroscope(localStorage.getItem("Horoscope"));
      }
    }

    if (horoscope.slice(1, 7) + "th" === moment().format("MMM Do"))
      getHoroscope();
  }, []);

  function confirmZodiac() {
    console.log(zodiacRef.current.value);
    localStorage.setItem("Zodiac", JSON.stringify(zodiacRef.current.value));
    setZodiac(zodiacRef.current.value);
    getHoroscope();
  }

  console.log(horoscope.slice(1, 7) + "th" === moment().format("MMM Do"));

  return (
    <div className="bg-black h-screen w-[30vw] absolute left-0 z-20 bg-opacity-90">
      <AiOutlineClose
        className="absolute right-5 top-5 hover:animate-spin"
        style={{ color: "white" }}
        size={30}
        onClick={() => {
          setHoroscopeState(false);
        }}
      />
      {zodiac ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-5xl text-white text-center">
            {horoscope.slice(1, 13)}
          </h1>
          <h3 className="text-3xl mt-5 text-white ">
            {zodiac ? zodiac : "Set Your Zodiac Now!♎"}
          </h3>
          <p className="text-white horoscope text-lg px-10 my-8 text-justify overflow-y-scroll h-[40vh]">
            {horoscope.slice(15, horoscope.indexOf("Wondering what"))}
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-5xl text-white ">{moment().format("MMM Do")}</h1>
          <h3 className="text-3xl mt-5 text-white ">Hey There!🔮</h3>
          <p className="text-white text-lg px-10 mt-8 mb-3 text-justify">
            Get your daily horoscope right here at your dashboard!
            <br />
            To get started, select your date of birth!
          </p>
          <div class="flex flex-col justify-center">
            <div class="mb-3 xl:w-80">
              <select
                ref={zodiacRef}
                class="form-select appearance-none
      block w-full px-10 py-1.5 text-base font-normal text-white bg-transparent bg-clip-padding bg-no-repeat border-white border-2 rounded-full transition ease-in-out m-0
      focus:text-white focus:bg-white focus:bg-opacity-30 focus:outline-none"
                aria-label="Default select example"
                onChange={(e) => {
                  //   setZodiac(zodiacRef.current.value);
                }}
              >
                <option selected>Select Your Date of Birth!</option>
                <option className="text-black" value="Aries">
                  March 21 - April 19
                </option>
                <option className="text-black" value="Taurus">
                  April 20 - May 20
                </option>
                <option className="text-black" value="Gemini">
                  May 21 - June 20
                </option>
                <option className="text-black" value="Cancer">
                  June 21 - July 22
                </option>
                <option className="text-black" value="Leo">
                  July 23 - August 22
                </option>
                <option className="text-black" value="Virgo">
                  August 23 - September 22
                </option>
                <option className="text-black" value="Libra">
                  September 23 - October 22
                </option>
                <option className="text-black" value="Scorpio">
                  October 23 - November 21
                </option>
                <option className="text-black" value="Sagittarius">
                  November 22 - December 21
                </option>
                <option className="text-black" value="Capricorn">
                  December 22 - January 19
                </option>
                <option className="text-black" value="Aquarius">
                  January 20 - February 18
                </option>
                <option className="text-black" value="Pisces">
                  February 19 - March 20
                </option>
              </select>
            </div>
            <p
              className="text-white bg-green-500 w-fit mx-auto px-3 py-1 rounded cursor-pointer hover:scale-105 hover:translate-y-1 transition-all ease-in"
              onClick={confirmZodiac}
            >
              Confirm
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Horoscope;
