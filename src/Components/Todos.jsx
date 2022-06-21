import React, { useContext } from "react";
import { User } from "../Contexts/UserContext";
import { AiOutlineDelete } from "react-icons/ai";

const Todos = () => {
  // Get the notes and setNotes state declared in the user context
  const { notes, setNotes } = useContext(User); 

  // Function to delete the note on clicking the dustbin icon
  function deleteTask(key) {
    // Returns the array of the notes without the element for whome the delete button was clicked
    var updatedTasks = notes.filter((elem, id) => {
      return id !== key;
    });
    setNotes(updatedTasks); //update the tasks array
  }

  return (
    // Todo react component
    <div className="absolute bg-black w-[25vw] h-96 bg-opacity-90 rounded-xl px-4 py-2 overflow-y-scroll todo_container shadow-2xl">
    {/* Show the notes if the toggle state is set to true */}
      {notes &&
        notes.map((elem, key) => {
          return (
            <div className="todo flex items-start my-3 bg-white bg-opacity-20 justify-between p-4 rounded-2xl" key={key}>
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
