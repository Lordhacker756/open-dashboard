import React, { useContext, useState } from "react";
import { User } from "../Contexts/UserContext";

const ToDoMini = ({openTodos}) => {
  const { notes, setNotes } = useContext(User); //get the notes and setNote from the user context
  const [task, setTask] = useState(); //stores the task input by the user

  return (
    <div className="text-white input_container py-1 px-2 flex items-center">
      <form>
        <input
          type="text"
          placeholder="Enter A Task"
          className="focus:bg-transparent bg-transparent placeholder:text-xl text-xl mt-3 focus:outline-none placeholder:text-white border-b-[2px] w-80"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault(); //On submit
            task && setNotes([...notes,task]); //Add the given note to the existing notes array
            setTask("") //Clear the current input value
            openTodos()
          }}
        >
          ✏️
        </button>
      </form>
    </div>
  );
};

export default ToDoMini;
