import React, {useState, createContext} from "react";

export const ThemeContext = createContext();

const ContextGeneral = (props) => {

    const [nickname, setNickName] = useState('');

    return (
        <ThemeContext.Provider value={{nickname, setNickName}}>
            {props.children}
            
        </ThemeContext.Provider>
    );
};

export default ContextGeneral;