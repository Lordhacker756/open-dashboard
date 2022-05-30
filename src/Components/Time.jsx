import moment from 'moment'
import React, { useState } from 'react'

const Time = () => {
    const [time, setTime] = useState(moment().format('h:mm'))

    setInterval(()=>{
        setTime(moment().format('h:mm'))
    },1000)

    return (
    <div className='text-[1050%] font-light text-white'>{time}</div>
  )
}

export default Time