// import
import React, { useState, createContext } from "react"
// export
export const ThemeContext = createContext()

const ContextGeneral = (props) => {

    const [nickname, setNickname] = useState('')
    const [players, setPlayers] = useState([])
    const [lobbyName, setLobbyName] = useState('')
    const [posX, setPosX] = useState(0)
    const [posY, setPosY] = useState(0)
    const [turn, setTurn] = useState('')
    const [tokenColor, setTokenColor] = useState([])
    const [square, setSquare] = useState('')
    const [buttonSuspect, setButtonSuspect] = useState(true)
    const [playerPosition, setPlayerPosition] = useState([])

    const dictStates = {

        nickname: nickname,
        players: players,
        lobbyName: lobbyName,
        posX: posX,
        posY: posY,
        turn: turn,
        tokenColor: tokenColor,
        square: square,
        buttonSuspect: buttonSuspect,
        playerPosition: playerPosition,

        setNickname: nickname => setNickname(nickname),
        setPlayers: players => setPlayers(players),
        setLobbyName: lobbyName => setLobbyName(lobbyName),
        setPosX: posX => setPosX(posX),
        setPosY: posY => setPosY(posY),
        setTurn: turn => setTurn(turn),
        setTokenColor: tokenColor => setTokenColor(tokenColor),
        setSquare: square => setSquare(square),
        setButtonSuspect: buttonSuspect => setButtonSuspect(buttonSuspect),
        setPlayerPosition: playerPosition => setPlayerPosition(playerPosition),

    }

    return (
        <ThemeContext.Provider value={dictStates}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ContextGeneral