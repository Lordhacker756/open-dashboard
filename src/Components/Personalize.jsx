import React, { useContext, useEffect, useState } from "react";
import { User } from "../Contexts/UserContext";

const Personalize = ({ personalize, setPersonalize }) => {
  const [category, setCategory] = useState(""); //Store individual category
  const [themeChoice, setThemeChoice] = useState([]); // category array
  const { user, setUser } = useContext(User);

  useEffect(() => {
    setThemeChoice(JSON.parse(localStorage.getItem("theme")));
  }, [personalize]);

  return (
    <div className="absolute bottom-10 bg-black h-[40vh] w-full bg-opacity-60 shadow-2xl rounded-lg p-4 backdrop-blur-sm">
      <div className="location_settings">
        <p className="text-white text-2xl font-semibold">
          Personalize Wallpapers🖼️
        </p>

        <button
          className="absolute top-3 right-3 text-xl hover:text-red-500"
          onClick={() => setPersonalize(false)}
        >
          x
        </button>

        <div className="name_settings">
          <p className="text-white mt-1 font-light text-lg my-1 font-semibold mb-3">
            Enter max 3 categories for your wallpapers one at a time
          </p>
          {/* Input for entering the categories */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setThemeChoice([...themeChoice, category]);
              // onclick, clear the input and add the category to theme choice array
              setCategory("");
            }}
          >
            <input
              className="w-[80%] mt-2 bg-transparent border-2 border-white rounded-l-full px-3 placeholder:text-white text-white focus:outline-none font-light mb-3"
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
              className="border-2 border-white border-l-0 bg-[#00D26A]"
              disabled={themeChoice.length > 2 || !category}
              type="submit"
            >
              ✅
            </button>
          </form>
          {/* Render the user categories of user input as pills with x button */}
          <div className="choices flex mt-2">
            {themeChoice.map((elem, key) => {
              return (
                <div
                  className="flex border-[2px] mx-2 hover:bg-white hover:bg-opacity-30 cursor-pointer border-[1px] border-white rounded-full w-fit px-4 py-1 items-center"
                  key={key}
                >
                  <p className="mr-2 text-sm">{elem}</p>
                  <button
                    className="hover:text-red-500"
                    onClick={() => {
                      setThemeChoice(
                        themeChoice.filter((elem, k) => k !== key)
                      );
                    }}
                  >
                    x
                  </button>
                </div>
              );
            })}
          </div>
          {/* Button, disabled when user choice is null or more than 3 else updates the theme in the user context object */}
          <button
            disabled={themeChoice.length === 0}
            className="absolute bottom-3 font-light border-2 border-white rounded-full px-10 py-1 hover:bg-green-500 disabled:bg-red-600 mb-3"
            onClick={() => {
              setUser({ ...user, theme: themeChoice });
              console.log("Personalize use effect fired");
              localStorage.setItem("theme", JSON.stringify(user.theme));
              setPersonalize(false);
              window.location.reload();
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Personalize;
