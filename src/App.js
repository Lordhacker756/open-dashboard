import React, { useContext, useState } from "react";
import Greetings from "./Components/Greetings";
import Quote from "./Components/Quote";
import Time from "./Components/Time";
import ToDoMini from "./Components/ToDoMini";
import Weather from "./Components/Weather";

import { User } from "./Contexts/UserContext";
import Hello from "./Components/Hello";
import Todos from "./Components/Todos";
import { FiSettings,FiMenu } from "react-icons/fi";
import Settings from "./Components/Settings";
import { FaPaintBrush } from "react-icons/fa";
import Personalize from "./Components/Personalize";
import fallBackImage from "./data/fallback_bg.jpg";
import { MdOutlineTimer } from "react-icons/md";
import Pomodoro from "./Components/Pomodoro";
import News from "./Components/News";
import { IconContext } from "react-icons";
import { GiNewspaper} from 'react-icons/gi'
import { TiArrowSortedDown,TiArrowSortedUp,TiNews } from 'react-icons/ti'

const App = () => {
  const { user } = useContext(User); //importing the user context which holds the values => name, verified status, theme and current location
  const [todo, setTodo] = useState(false); //Stores the notes
  const [settings, setSettings] = useState(false); // stores toggle state of settings box
  const [pomodoroToggle, setpomodoroToggle] = useState(false);
  const [personalize, setPersonalize] = useState(false); //stores toggle state of personalize box
  const [news, setNews] = useState(false); //stores toggle state of personalize box
  //const [bg, setBg] = useState(fallBackImage)

  //Function to fetch the theme from the localstorage, if found, assign it to bg_image, else assign "nature"
  const bg_image = () => {
    let storageImg = JSON.parse(localStorage.getItem("theme")).toString();
    if (!storageImg) return "nature";
    return storageImg;
  };

  return (
    <>
    <div className=" w-8 h-8 z-20 bg-black absolute  top-[50vh]  rounded-tr-lg rounded-br-lg hover:bg-white/40  " >
      <button onClick={()=>setNews(!news)}>
       <IconContext.Provider value={{className:'icons',size:'2rem'}}>

         { user && news ?<TiArrowSortedDown/>: <TiArrowSortedUp/>}

       </IconContext.Provider>
       <IconContext.Provider value={{className:'',size:'2rem',color:'white'}}>

         <GiNewspaper/>

       </IconContext.Provider>
      </button>
       
      </div>
      
      
    <div>
    {news && <News />}
    </div>
      {/* Check if the name, location, theme and verified exits in the localstorage aka, if the user is new or existing */}
      {/* {console.log(!user.name || !user.currLocation || !user.verified)} */}
      {!user.name || !user.currLocation || !user.verified ? (
        <Hello />
      ) : (
        <div
          className="main__container h-screen px-5 py-2] bg-cover"
          style={{
            backgroundImage: `url(https://source.unsplash.com/random/1366x768/?${bg_image()}), url(${fallBackImage})`,
            backgroundSize: "cover", //Image is fetched as per the user's preference
          }}
        >
          <div className="upper_container h-[10%] flex justify-between items-center">
            {/* Top container having the todo menu and weather app */}
            <div className="left text-white">
              <button
                className="w-[25vw]"
                onClick={() => {
                  // On clicking the button, toggle the state of the todo menu
                  if (todo) {
                    setTodo(false);
                  } else setTodo(true);
                }}
              >
                <FiMenu
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    padding: 5,
                    height: 30,
                    width: 30,
                    borderRadius: 50,
                  }}
                />
                {/* The menu icon imported from react-icon */}
              </button>
              {todo && <Todos />}
              {/* If the toggle state is true, show the todo component */}
            </div>
            <div className="right">
              <Weather /> {/* Weather component */}
            </div>
          </div>
          <div className="middle_container  h-[80%] flex flex-col justify-center items-center">
            <div className="greetings mb-5">
              <Greetings /> {/* Greeting container */}
            </div>
            <div className="time_conatiner  bg-black bg-opacity-50 backdrop-blur-lg rounded-3xl px-7 ">
              <Time /> {/* Time container */}
            </div>
            <div className="todo_main_container bg-black py-1 pb-3 rounded-lg px-10 bg-opacity-60 mt-4 shadow-2xl backdrop-blur-sm">
              <div className="main_tasks text-white text-2xl mt-3">
                What are the task for the day?
              </div>
              <div className="mini_todo_container">
                <ToDoMini openTodos={() => setTodo(true)} />{" "}
                {/* Todo input container */}
              </div>
            </div>
            <div className="main_tasks ">
              <Quote /> {/* Quote component */}
            </div>
          </div>
          <div className="lower_container  h-[10%] flex justify-between items-center">
            <div className="setting_div w-[28%] flex flex-col-reverse relative">
              <FiSettings
                style={{
                  color: "white",
                  backgroundColor: "black",
                  padding: 5,
                  height: 30,
                  width: 30,
                  borderRadius: 50,
                }}
                onClick={() => {
                  if (settings) {
                    setSettings(false);
                  } else {
                    setSettings(true);
                  }
                }}
              />
              {settings && <Settings />}{" "}
              {/* Showing the setting component if the toggle state is true */}
            </div>
            <div className="personalize text-white w-[28vw] flex justify-end relative">
              {/* Button to toggle the personalization menu */}
              <button
                className="flex items-center border-2 border-white rounded-full px-3 py-1 bg-black bg-opacity-40 hover:bg-black hover:bg-opacity-50"
                onClick={() => {
                  if (personalize) {
                    setPersonalize(false);
                  } else setPersonalize(true);
                }}
              >
                Personalize
                <FaPaintBrush className="mx-2" />
              </button>
              {/* Showing the personalize menu when the toggle state is set to true */}
              {personalize && (
                <Personalize
                  setPersonalize={setPersonalize}
                  personalize={personalize}
                />
              )}
            </div>
            <div
              className="pomodoro__container absolute right-[47%] translate-y-1 cursor-pointer hover:bg-black hover:bg-opacity-50 flex items-center px-5 py-1 justify-center rounded-full border-2 border-white bg-black bg-opacity-70 backdrop-blur-lg shadow-2xl"
              onClick={() => setpomodoroToggle(true)}
            >
              <p className="text-white font-base mr-1 ">Pomodoro</p>
              <MdOutlineTimer style={{ color: "white" }} size={20} />
            </div>
            {pomodoroToggle && (
              <Pomodoro
                pomodoroToggle={pomodoroToggle}
                setpomodoroToggle={setpomodoroToggle}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default App;
