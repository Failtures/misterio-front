import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

const ContextGeneral = (props) => {



    const [position, setPosition] = useState([])
    const [nickname, setNickname] = useState('');
    const [players, setPlayers] = useState([]);
    const [lobbyName, setLobbyName] = useState('')
    const [posX, setPosX] = useState(0)
    const [posY, setPosY] = useState(0)
    const [turn, setTurn] = useState('')

    const dictStates = {
        nickname: nickname,
        players: players,
        lobbyName: lobbyName,
        posX: posX,
        posY: posY,
        turn: turn,
        position: position,

        setNickname: (nickname) => setNickname(nickname),
        setPlayers: (players) => setPlayers(players),
        setLobbyName: (lobbyName) => setLobbyName(lobbyName),
        setPosX: (posX) => setPosX(posX),
        setPosY: (posY) => setPosY(posY),
        setTurn: (turn) => setTurn(turn),
        setPosition: (nickname, posX, posY) => {
            const aux = [
                {
                    nickname: nickname,
                    pos: {
                        posX: posX,
                        posY: posY
                    }
                }
            ]
            console.log(aux);
            setPosition([aux])
        }

    }

    return (
        <ThemeContext.Provider value={dictStates}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ContextGeneral;

// nickname, setNickname, players, setPlayers, posX, setPosX, posY, setPosY, turn, setTurn