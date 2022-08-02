import React from "react";
import { UserContext } from "./UserContext";

const user = {
    id: 47707540,
    name: "Billy Arredondo",
    email: "billy.arredondo@pucp.pe"
}

export const UserProvider = ({children}) => {
    return (
        <UserContext.Provider value={{hola: 'Mundo', user}}>
            {children}
        </UserContext.Provider>
    )
}
