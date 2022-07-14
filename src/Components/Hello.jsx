import React, { useContext, useState } from "react";
import { User } from "../Contexts/UserContext";
import { CgSpinner } from "react-icons/cg";

const Hello = () => {
  const { setUser } = useContext(User);
  const [name, setName] = useState();
  const [location, setLocation] = useState();
  const [api, setApi] = useState();
  const [loading, setLoading] = useState();
  const [category, setCategory] = useState("");
  const [themeChoice, setThemeChoice] = useState([]);

  return (
    <div className="snap-y h-screen overflow-y-hidden">
      <div className="h-screen bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center flex-col">
        <h1 className="text-white text-7xl my-3">Hello there!</h1>
        <h1 className="text-white text-2xl">Let's get you started!</h1>
        <a
          href="#name"
          className="mt-4 px-5 py-1 border-2 border-white rounded-full text-white animate-bounce"
        >
          Let's Go!
        </a>
      </div>

      <div
        id="name"
        className="h-screen bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 flex justify-center items-center flex-col snap-center"
      >
        <h1 className="text-white text-6xl my-3">Fully Customized!</h1>
        <h1 className="text-white text-2xl">
          Let us in with some basic details!
        </h1>
        <input
          className="bg-transparent my-1 mt-9 w-80 border-b-2 placeholder:text-white focus:outline-none border-white text-white focus:bg-transparent"
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          autoComplete="off"
        />
        <input
          className="focus:bg-transparent bg-transparent my-4 w-80 border-b-2 placeholder:text-white focus:outline-none border-white text-white"
          type="text"
          name="location"
          id="location"
          placeholder="Your City"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          autoComplete="off"
        />
        <div className="category_div w-80 flex items-center">
          <input
            className="focus:bg-transparent bg-transparent my-4 w-80 border-b-2 placeholder:text-white focus:outline-none border-white text-white"
            type="apiKey"
            name="apiKey"
            id="apiKey"
            placeholder="Enter Your OpenWeather API Key!"
            value={api}
            onChange={(e) => {
              setApi(e.target.value);
            }}
            autoComplete="off"
          />
          <button className="mx-1 items-center text-white text-xs flex w-[80px] border-2 h-[30px] px-2 py-1 rounded-full hover:bg-green-400 hover:border-green-400 hover:translate-x-1 transition-all ease-in">
            <a href="https://www.weatherapi.com/signup.aspx" target="_blank">
              Get 🗝️
            </a>
          </button>
        </div>
        <div className="category_div w-80">
          <p className="text-white font-light text-xs my-1">
            Enter max 3 categories for your wallpapers one at a time
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setThemeChoice([...themeChoice, category]);
              setCategory("");
            }}
          >
            <input
              className="w-72 bg-transparent border-b-2 border-white mt-1 px-1 placeholder:text-white text-white focus:outline-none"
              type="text"
              name="location"
              id="location"
              placeholder="Enter category e.g 'nature' "
              autoComplete="off"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
            <button
              className="border-2 border-[#00D26A] rounded-full  bg-[#00D26A]"
              disabled={themeChoice.length > 2 || !category}
              type="submit"
            >
              ✅
            </button>
          </form>
        </div>
        <div className="choices flex mt-3">
          {themeChoice.map((elem, key) => {
            return (
              <div
                className="flex border-[2px] mx-1 border-white rounded-full w-fit px-3 items-center"
                key={key}
              >
                <p className="mr-2 text-white">{elem}</p>
                <button
                  className="hover:text-red-500"
                  onClick={() => {
                    setThemeChoice(themeChoice.filter((elem, k) => k !== key));
                  }}
                >
                  x
                </button>
              </div>
            );
          })}
        </div>

        <button
          className="mt-4 px-5 py-1 border-2 border-white rounded-full text-white hover:-translate-y-1 transition-all ease-in hover:bg-green-400 hover:border-green-400"
          onClick={() => {
            if (name && location && api) {
              setLoading(true);
              setTimeout(() => {
                localStorage.setItem("name", name);
                localStorage.setItem("currLocation", location);
                localStorage.setItem("verified", true);
                localStorage.setItem("theme", JSON.stringify(themeChoice));
                localStorage.setItem("apiKey", JSON.stringify(api));
                setUser({
                  name,
                  currLocation: location,
                  verified: true,
                  theme: themeChoice,
                  apiKey: api,
                });
              }, 1500);
            }
          }}
        >
          {!loading ? "Let's Go!" : <CgSpinner className="animate-spin" />}
        </button>
      </div>
    </div>
  );
};

export default Hello;
