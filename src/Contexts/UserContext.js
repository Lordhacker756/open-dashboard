import { createContext, useEffect, useState } from "react";

export const User = createContext();

const UserContext = ({ children }) => {
    const [notes, setNotes] = useState(initNotes())
    const [user, setUser] = useState(initUser())

    //To pull tshe notes from localstorage on first loading
    function initNotes() {
        var tasks = localStorage.getItem('notes')
        if (tasks) {
            return JSON.parse(tasks)
        }
        else
            return []
    }

    function initUser(){
        if(!localStorage.getItem('name'))
        {
            console.log("default initialization ran")
            localStorage.setItem('name',JSON.stringify("NA"))
            localStorage.setItem('currLocation',JSON.stringify("NA"))
            localStorage.setItem('verified',JSON.stringify("NA"))
            localStorage.setItem('theme',JSON.stringify("NA"))
    
            return({
                name:"NA",
                currLocation:"NA",
                verified:"NA",
                theme:[]
            })
        }
        else
        {
            console.log("Normal initialization")
            return({
                name:(localStorage.getItem('name')),
                currLocation:(localStorage.getItem('currLocation')),
                verified:(localStorage.getItem('verified')),
                theme:JSON.parse(localStorage.getItem('theme'))
            })
        }
    }

    useEffect(() => {
        initNotes();
        initUser();
    }, [])


    //To update the note to localstorage whenever the note is updated
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

   // update localstorage when wallpaper categories are modified
     useEffect(()=>{
         localStorage.setItem('theme',JSON.stringify(user.theme))
     },[user.theme])

    return <User.Provider value={{ user, setUser, notes, setNotes}}>{children}</User.Provider>
}

export default UserContext;

//use effect meant to run on 