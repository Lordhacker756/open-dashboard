import { AiOutlineClockCircle } from 'react-icons/ai'
import CustomPomodoro from './DiffrentPomodoroTimers/CustomPomodor'
import ShortBreakPomodoro from './DiffrentPomodoroTimers/ShortBreakPomodoro'
import LongBreakPomodoro from './DiffrentPomodoroTimers/LongBreakPomodoro'
import { useState } from 'react'
// import { User } from "../Contexts/UserContext";
const PomodoroTimer = () => {
  const [timerToDisplay, setTimerToDisplay] = useState(<CustomPomodoro/>)
  // Pomodoro visibale variables
  // Show Pomodoro
const showPomodoro = () => {
  setTimerToDisplay(<CustomPomodoro/>)
}
const showShortBreakPomodoro = () => {
  setTimerToDisplay(<ShortBreakPomodoro/>)
}

const showLongBreakPomodoro = () => {
  setTimerToDisplay(<LongBreakPomodoro/>)
}


  return (
    <div className='flex flex-col items-center text-white'>
      <AiOutlineClockCircle />
      <h1>Pomodoro Timer</h1>
      <div className='flex'>
        <button className='px-2' onClick={showPomodoro} >Pomodoro</button>
        <button className='px-2' onClick={showShortBreakPomodoro}>Short Break</button>
        <button className='px-2' onClick={showLongBreakPomodoro}>Long Break</button>
      </div>
      {
        timerToDisplay
      }
    </div>
  );
}

export default PomodoroTimer;