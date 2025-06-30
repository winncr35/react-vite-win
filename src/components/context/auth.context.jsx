
import { createContext, useState } from "react";

export const AuthContext = createContext({
    email: "",
    phone: "",
    fullName: "",
    role: "",
    avatar: "",
    id: ""
})

export const AuthWrapper = (props) => {
    const [user, setUser] = useState({
        email: "",
        phone: "",
        fullName: "eric",
        role: "",
        avatar: "",
        id: ""
    })
    const [isAppLoading, setisAppLoading] = useState(true)
    return (
        <AuthContext.Provider value={{ user, setUser, isAppLoading, setisAppLoading }}>
            {props.children}
        </AuthContext.Provider>
    )
}