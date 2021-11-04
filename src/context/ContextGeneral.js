import React, {useState, createContext} from "react";

export const ThemeContext = createContext();

const ContextGeneral = (props) => {

    const [nickname, setNickName] = useState('');
    const [players, setPlayers] = useState([]);



    return (
        <ThemeContext.Provider value={{nickname, setNickName, players, setPlayers}}>
            {props.children}          
        </ThemeContext.Provider>
    );
};

export default ContextGeneral;