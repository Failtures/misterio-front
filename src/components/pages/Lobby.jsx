// imports
import React, { useEffect, useState, useContext } from "react"
import { useHistory } from "react-router"
import { ws } from "../WebSocket"
import { ThemeContext } from '../../context/ContextGeneral'
import { Toaster, toast } from "react-hot-toast"
// Components
import ButtonStartGame from "../buttons/ButtonStartGame"
import ButtonExitLobby from "../buttons/ButtonExitLobby"

import Cards from "./Card"
import Chat from "./Chat"
import './Lobby.css'

const Lobby = () => {

    const colors_token = ['green', 'blue', 'red', 'yellow', 'pink', 'orange']

    const dictStates = useContext(ThemeContext)

    const history = useHistory()

    const [players2, setPlayers2] = useState([])
    const [host, setHost] = useState('')
    const [buffer, setBuffer] = useState([])

    const takesGetHand = {
        'action': 'match_get_hand',
        'player_name': dictStates.nickname,
        'match_name': dictStates.lobbyName
    }

    useEffect(() => {

        ws.onmessage = (e) => {

            const parsedJson = JSON.parse(e.data)

            if (parsedJson.action === 'new_lobby') {
                setHost(parsedJson.lobby.host);
                setPlayers2([parsedJson.lobby.host]);
                dictStates.setLobbyName(parsedJson.lobby.name);
            }
            else if (parsedJson.action === 'joined_lobby') {
                setPlayers2(parsedJson.lobby.players);
                dictStates.setLobbyName(parsedJson.lobby.name);
            }
            else if (parsedJson.action === 'new_player') {
                setPlayers2((players2) => [...players2, parsedJson.player_name]);
                toast(`${parsedJson.player_name} joined the lobby`, {
                    position: "bottom-left",
                    autoClose: 4000,
                    style: {
                        background: '#ffffff',
                        color: "#116406"
                    }
                })
            }
            else if (parsedJson.action === 'match_started') {
                dictStates.setPlayerPosition(parsedJson.match.player_position.player_position)
                ws.send(JSON.stringify(takesGetHand))

                for (let i = 0; i < parsedJson.match.player_position.player_position.length; i++) {

                    const tokenPlayer = {
                        player: parsedJson.match.player_position.player_position[i].player_name,
                        color: colors_token[i]
                    }
                    dictStates.setTokenColor((tokenColor) => [...tokenColor, tokenPlayer])
                }

                dictStates.setTurn(parsedJson.match.turn)
                history.push(`/game/${parsedJson.match.name}`)
            }
            else if (parsedJson.action === 'player_left') {
                setPlayers2(players2.filter(player => player !== parsedJson.player_name));
                toast(`${parsedJson.player_name} left the lobby`, {
                    position: "bottom-left",
                    autoClose: 4000,
                    style: {
                        background: '#ffffff',
                        color: "#e50404"
                    }
                })
            }
            else if (parsedJson.action === 'lobby_removed') {
                history.push('/')
            }
            else if (parsedJson.action === 'new_message') {
                const date = new Date(parsedJson.timestamp)
                setBuffer((buffer) => [...buffer, `${date.getHours()}:${date.getMinutes()} ${parsedJson.author}: ${parsedJson.message}`])

            }
        }
    })

    return (

        <div className="lobby-container">
            <div className="lobby">
                <div className="lobby-players">
                    {
                        players2.map(player => <Cards player={player}></Cards>)
                    }
                </div>

                <div className="lobby-chat-start">
                    <Chat buffer={buffer}></Chat>
                    <div className="lobby-controls">
                        <div className="controls">
                            <ButtonExitLobby />
                            {host && <ButtonStartGame />}
                        </div>
                    </div>
                </div>
            </div>
            <Toaster
                position="bottom-left"
                reverseOrder={false}
            />
        </div>

    )
}

export default Lobby