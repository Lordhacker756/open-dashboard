import { useContext, useState} from 'react'
import { User } from "../../Contexts/UserContext";

const CustomPomodoro = () => {
  const { setIntialTime, initialTime, startPomodoro } = useContext(User)
  const [customeTime, setCustomTime] = useState(0)
  const handleChange = (e) => {
    setCustomTime(e.target.value)
  }
  let secs = initialTime
  let formatedTime = new Date(secs * 1000).toISOString().substring(14, 19);
  return ( initialTime ? 
    <div>
      {formatedTime}
    </div>
    :
    <ul className='flex '>
    <button className='px-3' onClick={() => {
      setIntialTime(900)
      startPomodoro(initialTime)
    }}>15m</button>
    <button className='px-3' onClick={() => {
      setIntialTime(1500)
      startPomodoro(initialTime)
    }}>25m</button>
    <form onSubmit={(e) => {
         e.preventDefault()
         setIntialTime(parseInt(customeTime)* 60)
         startPomodoro(initialTime)
       }}
       >
      <input 
      className="bg-black bg-opacity-30 rounded-3xl mx-2 my-3 w-20 appearance-none"
      type="number" 
      id="number"
      onChange={handleChange}
      style={{ color: 'white'}}
       />
    </form>
  </ul>
  );
}
 
export default CustomPomodoro;