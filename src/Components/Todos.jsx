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
  console.log(notes.length);
  return (
    // Todo react component
    <div className="absolute bg-black w-[25vw] h-96 bg-opacity-50 rounded-xl px-4 py-2 overflow-y-scroll todo_container shadow-2xl backdrop-blur-lg">
      {/* Show the notes if the toggle state is set to true */}
      {notes.length ? (
        notes.map((elem, key) => {
          return (
            <div
              className="todo flex items-start my-3 bg-white bg-opacity-20 justify-between p-4 rounded-2xl"
              key={key}
            >
              <p className="w-[20vw] h-auto pr-4 flex flex-wrap">{elem}</p>
              <AiOutlineDelete
                className="mt-1 cursor-pointer"
                onClick={() => deleteTask(key)}
              />
            </div>
          );
        })
      ) : (
        <div className="text-white text-center flex justify-center item-center h-full w-full flex-col">
          <h2 className="text-white font-semibold text-xl">
            Add Some Tasks For The Day📝
          </h2>
        </div>
      )}
    </div>
  );
};

export default Todos;
