import { useContext } from 'react'
import { User } from "../../Contexts/UserContext";
const LongBreakPomodoro = () => {
  const { setIntialTime, initialTime, startPomodoro } = useContext(User)
  let secs = initialTime
  let formatedTime = new Date(secs * 1000).toISOString().substring(14, 19);
  return (
    <button className='px-3' onClick={() => {
      setIntialTime(600)
      startPomodoro(initialTime)
    }}>{initialTime === 0 ? '10:00M' : formatedTime}</button>
  );
}
export default LongBreakPomodoro;