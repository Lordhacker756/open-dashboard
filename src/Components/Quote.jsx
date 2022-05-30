import React from 'react'
import quotes from '../data/Quotes'
import moment from 'moment'

function quoteSelector(){
  var d = moment().format("Do");  
  var day = parseInt(d.slice(0,2));
  return day
}



const Quote = () => {
  return (
    <div className='text-white mt-5 text-center font-thin'>{quotes[quoteSelector()].q}</div>
  )
}

export default Quote