import { createContext, useState } from "react";


export const PersonalDataContext = createContext(null);

const PersonalDataProvider = ({ children }) => {
    const [ personalpost, setPersonalpost ] = useState(false);
        
    return (
        <PersonalDataContext.Provider value={{ 
            personalpost, 
            setPersonalpost 
        }}>
            {children}
        </PersonalDataContext.Provider>
    )
}

export default PersonalDataProvider;