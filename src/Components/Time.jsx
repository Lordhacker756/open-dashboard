import moment from 'moment'
import React, { useState } from 'react'

const Time = () => {
  //State storing the current time
    const [time, setTime] = useState(moment().format('h:mm'))

    setInterval(()=>{
      // Updating the time every second
        setTime(moment().format('h:mm'))
    },1000)

    return (
    <div className='text-[1050%] font-light text-white'>{time}</div>
  )
}

export default Time