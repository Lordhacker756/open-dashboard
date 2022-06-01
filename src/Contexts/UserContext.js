import { createContext, useEffect, useState } from "react";

export const User = createContext();

const UserContext = ({ children }) => {
    const [notes, setNotes] = useState(initNotes())
    const [theme, setTheme] = useState(initTheme())
    const [user, setUser] = useState({
        name: localStorage.getItem('name'),
        location: localStorage.getItem('currLocation'),
        verified: localStorage.getItem('verified'),
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

    //Initalize the theme on loading
    function initTheme(){
        var theme = localStorage.getItem('theme')
        console.log(theme.length)
        if(theme){
            return JSON.parse(theme)
        }
        else
        return ["nature","night"]
    }

    useEffect(() => {
        initNotes();
        console.log(initTheme());
    }, [])


    //To update the note to localstorage whenever the note is updated
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    //update localstorage when wallpaper categories are modified
    useEffect(()=>{
        localStorage.setItem('theme',JSON.stringify(theme))
    },[theme])

    return <User.Provider value={{ user, setUser, notes, setNotes, theme, setTheme }}>{children}</User.Provider>
}

export default UserContext;