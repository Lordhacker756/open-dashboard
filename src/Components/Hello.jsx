import React, { useContext, useState } from "react";
import { User } from "../Contexts/UserContext";
import { CgSpinner } from "react-icons/cg";

const Hello = () => {
  const { user, setUser } = useContext(User);
  const [name, setName] = useState();
  const [location, setLocation] = useState();
  const [loading, setLoading] = useState();

  return (
    <div className="snap-y h-screen overflow-y-hidden">
      <div className="h-screen bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center flex-col">
        <h1 className="text-white text-7xl my-3">Hello there!</h1>
        <h1 className="text-white text-2xl">Let's get you started!</h1>
        <button className="mt-4 px-5 py-1 border-2 border-white rounded-full text-white animate-bounce">
          <a href="#name">Let's Go!</a>
        </button>
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
        <button
          className="mt-4 px-5 py-1 border-2 border-white rounded-full text-white"
          onClick={() => {
            if (name && location) {
              console.log(name, location);
              setLoading(true);
              setTimeout(() => {
                  localStorage.setItem('name',name)
                  localStorage.setItem('location',location)
                  localStorage.setItem('verified',true)
                setUser({ name, location, verified: true });
              }, 1500);
            }
          }}
        >
          {!loading ? <a>Let's Go!</a> : <CgSpinner className="animate-spin" />}
        </button>
      </div>
    </div>
  );
};

export default Hello;
