import React, { useContext, useEffect, useState } from "react";
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

const App = () => {
  const { user, setUser, theme } = useContext(User);
  const [todo, setTodo] = useState(false);
  const [settings, setSettings] = useState(false);
  const [personalize, setPersonalize] = useState(false);

  var bg_image=JSON.parse(localStorage.getItem('theme')).toString() ?? ["nature","night"]; 

  function initBg(){
    bg_image = JSON.parse(localStorage.getItem('theme')).toString();
    // console.log(`background image is ${bg_image}`)
    if(!bg_image)
    {
      bg_image = "nature"
    }
  }

  var loc,tname,verified,ttheme;
  useEffect(() => {
    loc = localStorage.getItem('currLocation')
    tname = localStorage.getItem('name')
    verified = localStorage.getItem('verified')
    ttheme = localStorage.getItem('theme')
    initBg()
    }, [])

  return (
    <>
    {console.log(((user.currLocation==="\"NA\"") && (user.name==="\"NA\"") && (user.verified==="\"NA\"")))}
      {((user.currLocation==="\"NA\"") && (user.name==="\"NA\"") && (user.verified==="\"NA\"")) ? (
        <Hello />
      ) : (
        <div
          className="main__container h-screen px-5 py-2] bg-opacity-75 bg-cover bg-black"
          style={{
            background: `url('https://source.unsplash.com/random/1366x768/?${bg_image}')`,
          }}
        >
          <div className="upper_container h-[10%] flex justify-between items-center">
            <div className="left text-white">
              <button
                className="w-[25vw]"
                onClick={() => {
                  if (todo) {
                    setTodo(false);
                  } else setTodo(true);
                }}
              >
                <FiMenu />
              </button>
              {todo && <Todos />}
            </div>
            <div className="right">
              <Weather />
            </div>
          </div>
          <div className="middle_container  h-[80%] flex flex-col justify-center items-center">
          <div className="greetings mb-5">
              <Greetings />
            </div>
            <div className="time_conatiner bg-black bg-opacity-30 rounded-3xl px-7">
              <Time />
            </div>
            <div className="todo_main_container bg-black py-1 pb-3 rounded-lg px-3 bg-opacity-40 mt-4">
              <div className="main_tasks text-white text-xl mt-3">
                What are the task for the day
              </div>
              <div className="mini_todo_container">
                <ToDoMini />
              </div>
            </div>
            <div className="main_tasks ">
              <Quote />
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
              {settings && <Settings />}
            </div>
            <div className="personalize text-white w-[28vw] flex justify-end relative">
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
