import React, { useContext, useState } from "react";
import { User } from "../Contexts/UserContext";

const Settings = () => {
  const { user, setUser } = useContext(User); //get the user context
  const [location, setLocation] = useState(); //state to store updated location
  const [name, setName] = useState(); //state to store updated name

  return (
    // Settings div
    <div className="absolute bottom-6 bg-black h-[40vh] w-full bg-opacity-40 rounded-lg p-4">
      <div className="location_settings">
        <p className="text-white text-xl font-light">User Settings⚙️</p>
        <div className="name_settings">
          <p className="text-white mt-3 font-light">Update Name✒️</p>
          {/* Input for updated value of location */}
          <input
            className="w-[80%] bg-transparent border-2 border-white mt-1 rounded-l-full px-3 placeholder:text-white text-white focus:outline-none font-light"
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

        <p className="text-white mt-3 font-light">Update Location🗺️</p>
        {/* Input for updated location */}
        <input
          className="w-[80%] bg-transparent border-2 border-white mt-1 rounded-l-full px-3 placeholder:text-white text-white focus:outline-none font-light"
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
