import React from "react";
import { useEffect,useState } from "react";
import {GrClose} from 'react-icons/gr'

const Pomodoro = ({pomodoroToggle,setpomodoroToggle}) => {

const [pomodoro, setPomodoro] = useState({
  isSet:false,
  duration:0
})
const [counter, setCounter] = useState(0)


function stopCountdown(){
  // clearInterval(countdown)
}

useEffect(() => {
  if(counter===0)
  stopCountdown()
}, [counter])

  return (
    <div className="pomodoro__container absolute top-0 left-0 h-[100%] w-[100%] bg-gradient-to-r from-[#4776E6] to-[#8E54E9] z-20 bg-opacity-90">
    <GrClose className="absolute right-5 top-5"  style={{ color: "white" }} size={25}
                onClick={() => {
                  if (pomodoroToggle) {
                    setpomodoroToggle(false);
                  } else {
                    setpomodoroToggle(true);
                  }
                }}/>
      {pomodoro.isSet && pomodoro.duration ? (
        <div className="time__container flex items-center justify-center h-screen">
          <p className="time text-9xl text-white">{counter}</p>
        </div>
      ) : (
        <div className="time__container flex flex-col items-center justify-center h-screen">
          <p className="time text-7xl text-white">Configure Pomodoro</p>
          <div className="time_selector mt-5">
            <button
              className="text-white border-2 hover:bg-white hover:bg-opacity-40 hover:scale-105 transition-all ease-in border-white rounded-full px-3 py-1 m-3"
              onClick={() =>
                setPomodoro({
                  isSet: true,
                  duration: 1800,
                })
              }
            >
              30 minutes
            </button>
            <button
              className="text-white border-2 hover:bg-white hover:bg-opacity-40 hover:scale-105 transition-all ease-in border-white rounded-full px-3 py-1 m-3"
              onClick={() =>
                setPomodoro({
                  isSet: true,
                  duration: 2700,
                })
              }
            >
              45 minutes
            </button>
            <button
              className="text-white border-2 hover:bg-white hover:bg-opacity-40 hover:scale-105 transition-all ease-in border-white rounded-full px-3 py-1 m-3"
              onClick={() =>
                setPomodoro({
                  isSet: true,
                  duration: 3300,
                })
              }
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
