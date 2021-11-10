import { createContext } from "react";
import UseFirebase from "../hooks/UseFirebase";
import UseServices from "../hooks/UseServices";

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const allContexts = UseFirebase();
    const { services } = UseServices();

    const data = { allContexts, services }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;