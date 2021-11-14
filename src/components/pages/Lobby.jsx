// imports
import React, { useEffect, useState, useContext, useRef } from "react";
import { useHistory } from "react-router";
import { ws } from "../WebSocket";
import { ThemeContext } from '../../context/ContextGeneral';
import { Alert } from "@material-ui/core";
// Components
import ButtonStartGame from "../buttons/ButtonStartGame";
import ButtonExitLobby from "../buttons/ButtonExitLobby";

const Lobby = () => {

    let arrayAuxiliar = [];
    const colors_token = ['green', 'blue', 'red', 'yellow', 'pink', 'orange']

    const dictStates = useContext(ThemeContext)

    const history = useHistory();

    const alertRef = useRef(null);

    const [players2, setPlayers2] = useState([]);
    const [host, setHost] = useState('');
    const [newplayer, setNewPlayer] = useState('')

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
            }
            else if (parseJson.action === 'match_started') {
                ws.send(JSON.stringify(takesGetHand));
                let pos = 0;
                let pos_x = 0;
                let pos_y = 0;
                for (let i = 0; i < parseJson.match.player_position.player_position.length; i++) {

                    if (dictStates.nickname === parseJson.match.player_position.player_position[i].player_name) {
                        dictStates.setTokenColor(colors_token[i])
                        pos = i
                    }

                }
                pos_x = parseJson.match.player_position.player_position[pos].pos_x;
                pos_y = parseJson.match.player_position.player_position[pos].pos_y;
                dictStates.setPosX(pos_x);
                dictStates.setPosY(pos_y);
                dictStates.setTurn(parseJson.match.turn);
                history.push(`/game/${parseJson.match.name}`);
            }
            else if (parseJson.action === 'player_left') {
                dictStates.setPlayers()
            }
            else if (parseJson.action === 'lobby_removed') {
                history.push('/');
            }
        };
    });

    return (


        <div className="lobby-container">
            <div className="lobby">
                <div className="lobby-players">
                    {
                        players2.map(player => <li>{player}</li>)
                    }
                </div>

                <div className="lobby-chat-start">
                    <div className="lobby-chat">
                        <h2>CHAT</h2>
                    </div>
                    <div className="lobby-controls">
                        <div className="controls">
                            {
                                host && <ButtonStartGame />
                            }
                            <ButtonExitLobby />
                        </div>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default Lobby;