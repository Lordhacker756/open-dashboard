import React, { useContext } from "react";
import Greetings from "./Components/Greetings";
import Quote from "./Components/Quote";
import Time from "./Components/Time";
import ToDoMini from "./Components/ToDoMini";
import Weather from "./Components/Weather";
import { FiMenu } from "react-icons/fi";
import { User } from "./Contexts/UserContext";
import Hello from "./Components/Hello";


const App = () => {

  const {user,setUser} = useContext(User)

  return (
    <>
    {(!user.verified)?<Hello/>:
      <div className="main__container h-screen px-5 py-2 bg-[url('https://source.unsplash.com/random/1366x768/?night')] bg-cover">
        <div className="upper_container h-[10%] flex justify-between items-center">
          <div className="left text-white">
            <button>
              <FiMenu />
            </button>
          </div>
          <div className="right">
            <Weather />
          </div>
        </div>
        <div className="middle_container  h-[80%] flex flex-col justify-center items-center">
          <div className="time_conatiner">
            <Time />
          </div>
          <div className="greetings">
            <Greetings />
          </div>
          <div className="main_tasks text-white text-xl mt-3">
            What are the task for the day
          </div>
          <div className="mini_todo_container">
            <ToDoMini />
          </div>
          <div className="main_tasks">
            <Quote />
          </div>
        </div>
        <div className="lower_container  h-[10%] flex justify-end items-center">
          <div className="todo text-white">TOdo</div>
        </div>
      </div>}
      </>
  );
};

export default App;
