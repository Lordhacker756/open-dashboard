import React, { useContext, useState } from "react";
import Greetings from "./Components/Greetings";
import Quote from "./Components/Quote";
import Time from "./Components/Time";
import ToDoMini from "./Components/ToDoMini";
import Weather from "./Components/Weather";
import { FiMenu } from "react-icons/fi";
import { User } from "./Contexts/UserContext";
import Hello from "./Components/Hello";
import Todos from "./Components/Todos";
import { FiSettings } from "react-icons/fi";
import Settings from "./Components/Settings";
import { FaPaintBrush } from "react-icons/fa";
import Personalize from "./Components/Personalize";
import fallBackImage from './data/fallback_bg.jpg'
import PomodoroTimer from "./Components/PomodoroTimer";

const App = () => {
  const { user } = useContext(User); //importing the user context which holds the values => name, verified status, theme and current location
  const [todo, setTodo] = useState(false); //Stores the notes
  const [settings, setSettings] = useState(false); // stores toggle state of settings box
  const [personalize, setPersonalize] = useState(false); //stores toggle state of personalize box
  //const [bg, setBg] = useState(fallBackImage)

  //Function to fetch the theme from the localstorage, if found, assign it to bg_image, else assign "nature"
  const bg_image = () => {
    let storageImg = JSON.parse(localStorage.getItem('theme')).toString();
    if (!storageImg) return "nature"
    return storageImg
  }

  /*
  const getBg = async() => {
    try {
      const res = await fetch(`https://source.unsplash.com/random/1366x768/?${bg_image}`)
       if(res.url){
         setBg(res.url)
       } 
    } catch (e) {
      console.error(e);
    }
  }
 
  //Calling the function to fetch the theme after the loading of the page is completed
  useEffect(() => {
      getBg();
      // eslint-disable-next-line
    }, [])*/

  return (
    <>
      {/* Check if the name, location, theme and verified exits in the localstorage aka, if the user is new or existing */}
      {console.log(!user.name || !user.currLocation || !user.verified)}
      {(!user.name || !user.currLocation || !user.verified) ? (
        <Hello />
      ) : (
        <div
          className="main__container h-screen px-5 py-2] bg-opacity-75 bg-cover bg-black"
          style={{
            "background-image": `url(https://source.unsplash.com/random/1366x768/?${bg_image()}), url(${fallBackImage})`, "background-size": 'cover' //Image is fetched as per the user's preference
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
                <FiMenu /> {/* The menu icon imported from react-icon */}
              </button>
              {todo && <Todos />} {/* If the toggle state is true, show the todo component */}
            </div>
            <div className="right">
              <Weather /> {/* Weather component */}
            </div>
          </div>
          <div className="middle_container  h-[80%] flex flex-col justify-center items-center">
            <div className="greetings mb-5">
              <Greetings /> {/* Greeting container */}
            </div>
            <div className="time_conatiner bg-black bg-opacity-30 rounded-3xl px-7">
              <Time /> {/* Time container */}
            </div>
            <div className="bg-black bg-opacity-30 rounded-3xl px-7 my-3">
              <PomodoroTimer />
            </div>
            <div className="todo_main_container bg-black py-1 pb-3 rounded-lg px-3 bg-opacity-40 mt-4">
              <div className="main_tasks text-white text-xl mt-3">
                What are the task for the day
              </div>
              <div className="mini_todo_container">
                <ToDoMini openTodos={() => setTodo(true)} /> {/* Todo input container */}
              </div>
            </div>
            <div className="main_tasks ">
              <Quote /> {/* Quote component */}
            </div>
          </div>
          <div className="lower_container  h-[10%] flex justify-between items-center">
            <div className="setting_div w-[28%] flex flex-col-reverse relative">
              <FiSettings
                style={{ color: "white" }}
                onClick={() => {
                  if (settings) {
                    setSettings(false);
                  } else {
                    setSettings(true);
                  }
                }}
              />
              {settings && <Settings />} {/* Showing the setting component if the toggle state is true */}
            </div>
            <div className="personalize text-white w-[28vw] flex justify-end relative">
              {/* Button to toggle the personalization menu */}
              <button
                className="flex items-center border-2 border-white rounded-full px-3 py-1 bg-black bg-opacity-40"
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
          </div>
        </div>
      )}
    </>
  );
};

export default App;
