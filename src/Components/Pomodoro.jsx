import React from "react";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { BsPauseCircle } from "react-icons/bs";
import { GrResume } from "react-icons/gr";
import { BsStopCircle } from "react-icons/bs";

import { AiOutlineClose } from "react-icons/ai";
import { User } from "../Contexts/UserContext";

const Pomodoro = ({ pomodoroToggle, setpomodoroToggle }) => {
  const { setIntialTime, initialTime, startPomodoro } = useContext(User);
  const [timer, setTimer] = useState();

  useEffect(() => {
    console.log(initialTime < 0);
    clearInterval(timer);
    var minutes = Math.floor(initialTime / 60);
    var seconds = Math.floor(initialTime % 60);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    var countdown = minutes + ":" + seconds;
    setTimer(countdown);
    if (countdown != "0:00") document.title = countdown + "⌛";
    else {
      document.title = "⏲️ Completed 🥳";
      setTimeout(() => (document.title = "Open Dashboard"), 5000);
      localStorage.setItem("pomodoro", "completed");
    }
  }, [initialTime]);

  function clearPomodoro() {
    setTimer(0);
    setIntialTime(0);
    localStorage.setItem("pomodoro", "cleard");
  }

  return (
    <div className="pomodoro__container absolute top-0 left-0 h-[100%] w-[100%] bg-black bg-opacity-[40%] z-20 backdrop-blur-xl	">
      <AiOutlineClose
        className="absolute right-5 top-5 hover:animate-spin"
        style={{ color: "white" }}
        size={35}
        onClick={() => {
          if (pomodoroToggle) {
            setpomodoroToggle(false);
          } else {
            setpomodoroToggle(true);
          }
        }}
      />
      {initialTime > 0 ? (
        <div className="time__container flex items-center justify-center h-screen flex-col">
          <p className="text-white absolute top-5">
            Press F11 or Fn+F11 to go Full Screen! 💡
          </p>
          <p className="time text-[20rem] text-white">{timer}</p>
          <div className="btn_container flex mt-10">
            {/* <BsPauseCircle className="mx-3 cursor-pointer" style={{color:'white'}} size={45} onClick={()=>{pausePomodoro()}}/> */}
            {/* <GrResume className="mx-3 cursor-pointer" style={{color:'white'}} size={45} onClick={()=>{resumePomodoro()}}/> */}
            <BsStopCircle
              className="mx-3 cursor-pointer"
              style={{ color: "white" }}
              size={45}
              onClick={() => {
                clearPomodoro();
              }}
            />
          </div>
        </div>
      ) : (
        <div className="time__container flex flex-col items-center justify-center h-screen">
          <p className="time text-7xl text-white">Configure Pomodoro</p>
          <div className="time_selector mt-5">
            <button
              className="text-white border-2 hover:bg-white hover:bg-opacity-40 hover:scale-105 transition-all ease-in border-white rounded-full px-3 py-1 m-3"
              onClick={() => {
                setIntialTime(1800);
                startPomodoro(initialTime);
              }}
            >
              30 minutes
            </button>
            <button
              className="text-white border-2 hover:bg-white hover:bg-opacity-40 hover:scale-105 transition-all ease-in border-white rounded-full px-3 py-1 m-3"
              onClick={() => {
                setIntialTime(2700);
                startPomodoro(initialTime);
              }}
            >
              45 minutes
            </button>
            <button
              className="text-white border-2 hover:bg-white hover:bg-opacity-40 hover:scale-105 transition-all ease-in border-white rounded-full px-3 py-1 m-3"
              onClick={() => {
                setIntialTime(3000);
                startPomodoro(initialTime);
              }}
            >
              50 minutes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pomodoro;
