import { createContext, useEffect, useState } from "react";

export const User = createContext();

const UserContext = ({children}) => {
    const [notes, setNotes] = useState(initNotes())
    //To pull the notes from localstorage on first loading
    function initNotes(){
        var tasks = localStorage.getItem('notes')
        if(tasks)
        {
          return JSON.parse(tasks)
        }
        else
        return []    
    }

    useEffect(() => {
        initNotes();   
    }, [])  


    //To update the note to localstorage whenever the note is updated
    useEffect(() => {
    localStorage.setItem('notes',JSON.stringify(notes))
    }, [notes])

    

    const [user, setUser] = useState({
        name:localStorage.getItem('name'),
        location:localStorage.getItem('currLocation'),
        verified:localStorage.getItem('verified'),
    })
    return <User.Provider value={{user,setUser,notes,setNotes}}>{children}</User.Provider>
}

export default UserContext;