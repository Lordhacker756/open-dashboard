import React, { useContext, useState } from "react";
import { User } from "../Contexts/UserContext";

const Personalize = ({personalize, setPersonalize}) => {
  const [category, setCategory] = useState("");
  const [themeChoice, setThemeChoice] = useState([]);
  const {user,setUser} = useContext(User)

  return (
    <div className="absolute bottom-10 bg-black h-[40vh] w-full bg-opacity-40 rounded-lg p-4 shadow-lg">
      <div className="location_settings">
        <p className="text-white text-xl font-light">
          Personalize Wallpapers🖼️
        </p>

        <button className="absolute top-3 right-3 text-xl hover:text-red-500" onClick={()=>setPersonalize(false)}>x</button>

        <div className="name_settings">
          <p className="text-white mt-3 font-light text-xs my-1">
            Enter max 3 categories for your wallpapers one at a time
          </p>
          <input
            className="w-[80%] bg-transparent border-2 border-white mt-1 rounded-l-full px-3 placeholder:text-white text-white focus:outline-none font-light"
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
            disabled={themeChoice.length>2 || (!category)}
            onClick={() => {setThemeChoice([...themeChoice,category]
            )
            setCategory("")
            }}
          >
            ✅
          </button>
          <div className="choices flex mt-3">
          {themeChoice.map((elem,key)=>{
             return <div className="flex border-[2px] mx-1 border-white rounded-full w-fit px-3 items-center" key={key}><p className="mr-2">{elem}</p><button className="hover:text-red-500" onClick={()=>{
                 setThemeChoice(themeChoice.filter((elem,k)=>k!=key))
             }}>x</button></div>
         })}
          </div>
          <button disabled={themeChoice.length===0} className="absolute bottom-3 font-light border-2 border-white rounded-full px-5 hover:bg-green-500 disabled:bg-red-600" onClick={()=>{
              setUser({...user,theme:themeChoice})
              localStorage.setItem('theme',JSON.stringify(user.theme))
              setPersonalize(false)
              window.location.reload()
          }}>
              Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Personalize;
