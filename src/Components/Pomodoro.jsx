import React from "react";
import { useEffect,useState } from "react";
import {GrClose} from 'react-icons/gr'

const Pomodoro = ({pomodoroToggle,setpomodoroToggle}) => {

const [pomodoro, setPomodoro] = useState(0)
const [timer, setTimer] = useState(0)

function startPomodoro()
{
  var ticker = setInterval(()=>{
    console.log(pomodoro)
    setPomodoro((pomodoro)=>pomodoro-1)
    if(pomodoro == 0)
    {
      console.log(pomodoro==0)
      // clearInterval(ticker);
      document.title='Complete⏲️🥳'
    }
  },1000)
}

useEffect(() => {
  var minutes = Math.floor(pomodoro/60);
  var seconds = Math.floor(pomodoro%60);
  console.log("Useeffect"+pomodoro)
  seconds = seconds<10?'0'+seconds:seconds;
  var countdown = minutes+':'+seconds;
  setTimer(countdown)
  document.title = countdown+'⌛'
}, [pomodoro])


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
      {pomodoro ? (
        <div className="time__container flex items-center justify-center h-screen">
          <p className="time text-9xl text-white">{timer}</p>
        </div>
      ) : (
        <div className="time__container flex flex-col items-center justify-center h-screen">
          <p className="time text-7xl text-white">Configure Pomodoro</p>
          <div className="time_selector mt-5">
            <button
              className="text-white border-2 hover:bg-white hover:bg-opacity-40 hover:scale-105 transition-all ease-in border-white rounded-full px-3 py-1 m-3"
              onClick={() =>{
                setPomodoro(3)
                startPomodoro(1800)}
              }
            >
              30 minutes
            </button>
            <button
              className="text-white border-2 hover:bg-white hover:bg-opacity-40 hover:scale-105 transition-all ease-in border-white rounded-full px-3 py-1 m-3"
              onClick={() =>{
                setPomodoro(2700)
                startPomodoro(2700)}
              }
            >
              45 minutes
            </button>
            <button
              className="text-white border-2 hover:bg-white hover:bg-opacity-40 hover:scale-105 transition-all ease-in border-white rounded-full px-3 py-1 m-3"
              onClick={() =>{
                setPomodoro(3300)
                startPomodoro(3300)}
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
