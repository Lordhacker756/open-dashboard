import React, { useContext, useState } from "react";
import { User } from "../Contexts/UserContext";

const Settings = () => {
  const { user, setUser } = useContext(User); //get the user context
  const [location, setLocation] = useState(); //state to store updated location
  const [name, setName] = useState(); //state to store updated name

  return (
    // Settings div
    <div className="absolute bottom-8 bg-black h-[40vh] w-full bg-opacity-50 rounded-lg p-4 shadow-2xl backdrop-blur-lg">
      <div className="location_settings">
        <p className="text-white text-3xl mb-10">User Settings⚙️</p>
        <div className="name_settings">
          <p className="text-white mt-3 text-lg">Update Name✒️</p>
          {/* Input for updated value of location */}
          <input
            className="w-[80%] bg-transparent mt-2 border-2 border-white rounded-l-full px-3 placeholder:text-white text-white focus:outline-none font-light"
            type="text"
            name="location"
            id="location"
            placeholder="Enter Name"
            autoComplete="off"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button
            className="border-2 border-white border-l-0 bg-[#00D26A]"
            onClick={() => {
              // update the name in the user context user.name:name if the name is not empty
              name && setUser({ ...user, name });
            }}
          >
            ✅
          </button>
        </div>

        <p className="text-white mt-6 text-lg">Update Location🗺️</p>
        {/* Input for updated location */}
        <input
          className="w-[80%] bg-transparent border-2 border-white mt-2 rounded-l-full px-3 placeholder:text-white text-white focus:outline-none font-light"
          type="text"
          name="location"
          id="location"
          placeholder="Enter New Location"
          autoComplete="off"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <button
          className="border-2 border-white border-l-0 bg-[#00D26A]"
          onClick={() => {
            // update the location on button click ⚠️
            location && setUser({ ...user, currLocation: location });
            localStorage.setItem("currLocation", location);
          }}
        >
          ✅
        </button>
      </div>
    </div>
  );
};

export default Settings;
