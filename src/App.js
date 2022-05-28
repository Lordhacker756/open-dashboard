import React from "react";

const App = () => {
  return (
    <div className="main__container h-screen px-5 py-2">
      <div className="upper_container bg-red-500 h-[10%] flex justify-between items-center">
        <div className="left">Good Morning</div>
        <div className="right">25 Degrees</div>
      </div>
      <div className="middle_container bg-yellow-400 h-[80%] flex flex-col justify-center items-center">
        <div className="time_conatiner">10:10 AM</div>
        <div className="greetings">Good Morrow</div>
        <div className="main_tasks">What are the frogs</div>
        <div className="main_tasks">Quote</div>
      </div>
      <div className="lower_container bg-gray-400 h-[10%] flex justify-end items-center">
        <div className="todo">TOdo</div>
      </div>
    </div>
  );
};

export default App;
