import React from 'react'

const ToDoMini = () => {
  return (
    <div className='text-white input_container'>
    <label htmlFor="task"></label>
        <input className='bg-transparent focus:outline-none focus:border-b-2 focus:border-white border-b-2 border-white' type="text" name="task" id="task" />
    </div>
  )
}

export default ToDoMini