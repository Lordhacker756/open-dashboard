import { createContext, useEffect, useState } from "react";

export const User = createContext();

const UserContext = ({ children }) => {
  // Note state for storing the todos
  const [notes, setNotes] = useState([]);

  // User state to store name, current location, verified status and theme
  const [user, setUser] = useState(null);

  // Run the initializing function on first load
  useEffect(() => {
    // Function to initialize the user if localstoage is empty
    const initUser = () => {
      if (localStorage.getItem("name")) {
        console.log("Normal initialization");
        return {
          name: localStorage.getItem("name"),
          currLocation: localStorage.getItem("currLocation"),
          verified: localStorage.getItem("verified"),
          theme: JSON.parse(localStorage.getItem("theme")),
        };
      }
      console.log("No user stored in local storage!");
      return null;
    };

    // To pull tshe notes from localstorage on first loading
    const initNotes = () => {
      const tasks = localStorage.getItem("notes");
      if (tasks) {
        return JSON.parse(tasks);
      }
      return [];
    };
    setUser(initUser());
    setNotes(initNotes());
  }, []);

  //To update the note to localstorage whenever the note is updated
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <User.Provider value={{ user, setUser, notes, setNotes }}>
      {children}
    </User.Provider>
  );
};

export default UserContext;

//use effect meant to run on
