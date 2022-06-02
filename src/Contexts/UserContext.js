import { createContext, useEffect, useState } from "react";

export const User = createContext();

const UserContext = ({ children }) => {
    const [notes, setNotes] = useState(initNotes())
    const [user, setUser] = useState({
        name: localStorage.getItem('name'),
        location: localStorage.getItem('currLocation'),
        verified: localStorage.getItem('verified'),
        theme:JSON.parse(localStorage.getItem('theme'))
    })


    //To pull tshe notes from localstorage on first loading
    function initNotes() {
        var tasks = localStorage.getItem('notes')
        if (tasks) {
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
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

   // update localstorage when wallpaper categories are modified
     useEffect(()=>{
         localStorage.setItem('theme',JSON.stringify(user.theme))
         console.log("Update useEffect runnin")
     },[user.theme])

    return <User.Provider value={{ user, setUser, notes, setNotes}}>{children}</User.Provider>
}

export default UserContext;

//use effect meant to run on 