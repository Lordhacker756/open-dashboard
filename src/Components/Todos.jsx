import React, { useContext } from "react";
import { User } from "../Contexts/UserContext";
import { AiOutlineDelete } from "react-icons/ai";

const Todos = () => {
  const { notes, setNotes } = useContext(User);

  function deleteTask(key) {
    var updatedTasks = notes.filter((elem, id) => {
      return id !== key;
    });
    setNotes(updatedTasks);
  }

  return (
    <div className="absolute bg-white w-[25vw] h-96 bg-opacity-40 rounded-xl p-2 overflow-y-scroll todo_container">
      {notes &&
        notes.map((elem, key) => {
          return (
            <div className="todo flex items-start my-2 bg-black bg-opacity-20 justify-between p-4 rounded-2xl" key={key}>
              <p className="w-[20vw] h-auto pr-4 flex flex-wrap">
                {elem}
              </p>
              <AiOutlineDelete
                className="mt-1 cursor-pointer"
                onClick={()=>deleteTask(key)}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Todos;
