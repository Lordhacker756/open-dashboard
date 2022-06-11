import { AiOutlineClockCircle } from 'react-icons/ai'
import CustomPomodoro from './DiffrentPomodoroTimers/CustomPomodor'
import ShortBreakPomodoro from './DiffrentPomodoroTimers/ShortBreakPomodoro'
import LongBreakPomodoro from './DiffrentPomodoroTimers/LongBreakPomodoro'
import { useState, useContext } from 'react'
import { User } from "../Contexts/UserContext";

const PomodoroTimer = () => {
  // imported the setInitialTime form context
  const { setIntialTime } = useContext(User)
  // state to know which timer to display
  const [timerToDisplay, setTimerToDisplay] = useState(<CustomPomodoro/>)
  // Show Pomodoro
const showPomodoro = () => {
  setTimerToDisplay(<CustomPomodoro/>)
}
// Show shortBreak Timer 
const showShortBreakPomodoro = () => {
  setTimerToDisplay(<ShortBreakPomodoro/>)
}
// Show longBreak Timer 
const showLongBreakPomodoro = () => {
  setTimerToDisplay(<LongBreakPomodoro/>)
}


  return (
    <div className='flex flex-col items-center text-white'>
      <AiOutlineClockCircle />
      <div className='flex'>
        {/* for each button clicked will run a function and it will show the specifi timer */}
        <button className='px-2' onClick={showPomodoro} >Pomodoro</button>
        <button className='px-2' onClick={showShortBreakPomodoro}>Short Break</button>
        <button className='px-2' onClick={showLongBreakPomodoro}>Long Break</button>
      </div>
      {
        timerToDisplay
      }
      <div>
        <button
        onClick={
          () => setIntialTime(0)
        }>Stop</button>
      </div>
    </div>
  );
}

export default PomodoroTimer;