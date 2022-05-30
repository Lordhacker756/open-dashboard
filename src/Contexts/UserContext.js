import { createContext, useState } from "react";

export const User = createContext();

const UserContext = ({children}) => {
    const [user, setUser] = useState({
        name:localStorage.getItem('name'),
        location:localStorage.getItem('currLocation'),
        verified:localStorage.getItem('verified')
    })
    return <User.Provider value={{user,setUser}}>{children}</User.Provider>
}

export default UserContext;