//share a context and its state with other components

import {createContext, useContext, useState} from "react";

export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)


//providing the context to other components through AuthProvider
function AuthProvider({children}) {

    // const [number, setNumber] = useState(0)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    function login(username, password) {
        if (username === "Georgi" && password === "password") {
            setIsAuthenticated(true)
            return true
        } else {
            setIsAuthenticated(false)
            return false
        }
    }

    function logout() {
        setIsAuthenticated(false)
    }

    //every 10 secs we increment the value + 1
    // setInterval(
    //     () => setNumber(number + 1), 10000
    // )

    // const sharedValues = {number, isAuthenticated, setIsAuthenticated}
    //same as:

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider