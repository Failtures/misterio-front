// imports
import React, { useEffect, useState, useContext, useRef } from "react";
import { useHistory } from "react-router";
import { ws } from "../WebSocket";
import { ThemeContext } from '../../context/ContextGeneral';
import { Toaster, toast } from "react-hot-toast";
// Components
import ButtonStartGame from "../buttons/ButtonStartGame";
import ButtonExitLobby from "../buttons/ButtonExitLobby";

import Cards from "./Card";
import Chat from "./Chat";

import './Lobby.css'

const Lobby = () => {

    let arrayAuxiliar = [];
    const colors_token = ['green', 'blue', 'red', 'yellow', 'pink', 'orange']

    const dictStates = useContext(ThemeContext)

    const history = useHistory();

    const alertRef = useRef(null);

    const [players2, setPlayers2] = useState([]);
    const [host, setHost] = useState('');


    const [newPlayer, setNewPlayer] = useState('');
    const [leftPlayer, setLeftPlayer] = useState('');

    const [buffer, setBuffer] = useState([]);

    const takesGetHand = {
        'action': 'match_get_hand',
        'player_name': dictStates.nickname,
        'match_name': dictStates.lobbyName
    };

    useEffect(() => {

        ws.onmessage = (e) => {

            const parseJson = JSON.parse(e.data);

            if (parseJson.action === 'new_lobby') {
                setHost(parseJson.lobby.host);
                setPlayers2([parseJson.lobby.host]);
                dictStates.setPlayers(parseJson.lobby.players);
                dictStates.setLobbyName(parseJson.lobby.name);
            }
            else if (parseJson.action === 'joined_lobby') {
                setPlayers2(parseJson.lobby.players);
                dictStates.setPlayers(parseJson.lobby.players);
                dictStates.setLobbyName(parseJson.lobby.name);
            }
            else if (parseJson.action === 'new_player') {
                setPlayers2((players2) => [...players2, parseJson.player_name]);
                arrayAuxiliar = dictStates.players.slice();
                arrayAuxiliar.push(parseJson.player_name);
                dictStates.setPlayers(arrayAuxiliar);
                setNewPlayer(parseJson.player_name);
                //alertRef.current.style.display = 'block';
                dictStates.setPlayers(arrayAuxiliar);
                toast(`${parseJson.player_name} joined the lobby`, {
                    position: "bottom-left",
                    autoClose: 4000,
                    style: {
                        background: '#ffffff',
                        color: "#116406"
                    }
                })
            }
            else if (parseJson.action === 'match_started') {
                dictStates.setPlayerPosition(parseJson.match.player_position.player_position)
                ws.send(JSON.stringify(takesGetHand));

                for (let i = 0; i < parseJson.match.player_position.player_position.length; i++) {

                    const tokenPlayer = {
                        player: parseJson.match.player_position.player_position[i].player_name,
                        color: colors_token[i]
                    }
                    dictStates.setTokenColor((tokenColor) => [...tokenColor, tokenPlayer])
                }

                dictStates.setTurn(parseJson.match.turn);
                history.push(`/game/${parseJson.match.name}`);
            }
            else if (parseJson.action === 'player_left') {
                setPlayers2(players2.filter(player => player !== parseJson.player_name));
                setLeftPlayer(parseJson.player_name);
                dictStates.setPlayers()
                toast(`${parseJson.player_name} left the lobby`, {
                    position: "bottom-left",
                    autoClose: 4000,
                    style: {
                        background: '#ffffff',
                        color: "#e50404"
                    }
                })
            }
            else if (parseJson.action === 'lobby_removed') {
                history.push('/');
            }
            else if (parseJson.action === 'new_message') {
                setBuffer((buffer) => [...buffer, parseJson.message]);
                console.log(parseJson.message);
            }
        };
    });

    return (

        <div className="lobby-container">
            <div className="lobby">
                <div className="lobby-players">
                    {
                        players2.map(player => <Cards player={player}></Cards>)
                    }


                </div>

                <div className="lobby-chat-start">
                    <Chat buffer={buffer} newPlayer={newPlayer} leftPlayer={leftPlayer}></Chat>
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

    );
};

export default Lobby;