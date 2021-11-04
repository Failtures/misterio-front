import React, {useState, createContext} from "react";

export const ThemeContext = createContext();

const ContextGeneral = (props) => {

    const [nickname, setNickName] = useState('');
    const [gameName, setGameName] = useState('');

    return (
        <ThemeContext.Provider value={{nickname, setNickName, gameName, setGameName}}>
            {props.children}
            
        </ThemeContext.Provider>
    );
};

export default ContextGeneral;