import React, { useContext, useState } from "react";
import { User } from "../Contexts/UserContext";

const ToDoMini = () => {
  const { notes, setNotes } = useContext(User);
  const [task, setTask] = useState();

  return (
    <div className="text-white input_container py-1 px-2 flex items-center">
      <form>
        <input
          type="text"
          placeholder="Enter A Task"
          className="focus:bg-transparent bg-transparent focus:outline-none placeholder:text-white border-b-[2px]"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setTask("")
            setNotes([...notes,task]);
          }}
        >
          ✏️
        </button>
      </form>
    </div>
  );
};

export default ToDoMini;
