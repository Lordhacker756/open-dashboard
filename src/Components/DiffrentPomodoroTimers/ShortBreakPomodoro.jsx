import { useContext } from 'react'
import { User } from "../../Contexts/UserContext";
const ShortBreakPomodoro = () => {
  const { setIntialTime, initialTime, startPomodoro } = useContext(User)
  let secs = initialTime
  let formatedTime = new Date(secs * 1000).toISOString().substring(14, 19);
  return (  
    <button className='px-3' onClick={() => {
      setIntialTime(300)
      startPomodoro(initialTime)
    }}>{initialTime === 0 ? '5:00M': formatedTime }</button>
  );
}
 
export default ShortBreakPomodoro;