import React, { useEffect, useState, useContext, useRef } from "react";
import { useHistory } from "react-router";
import { ws } from "../WebSocket";
import ButtonStartGame from "../buttons/ButtonStartGame";
import ButtonExitLobby from "../buttons/ButtonExitLobby";

import { ThemeContext } from '../../context/ContextGeneral';

import { Alert } from "@material-ui/core";

const Lobby = () => {

    const [newplayer, setNewPlayer] = useState('')

    const colors_token = ['green', 'blue', 'red', 'yellow', 'pink', 'orange']

    const dictStates = useContext(ThemeContext);

    const history = useHistory();

    const alertRef = useRef(null);

    const [host, setHost] = useState('')

    const [players2, setPlayers2] = useState([]);

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
                alertRef.current.style.display = 'block';
            }
            else if (parseJson.action === 'match_started') {
                ws.send(JSON.stringify(takesGetHand));
                let pos = 0;
                let pos_x = 0;
                let pos_y = 0;
                // console.log(parseJson.match.player_position.player_position);
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

        <div>
            <h2>Lobby</h2>
            <ul>
                {

                    players2.map(player => <li>{player}</li>)

                }
            </ul>

            {
                host &&
                <ButtonStartGame
                    action={'lobby_start_match'}
                    player_name={host}
                />
            }
            <ButtonExitLobby />
            <Alert style={{ display: 'none' }} ref={alertRef} onClose={() => { alertRef.current.style.display = "none" }} variant="filled" severity="info">
                A new player has joined:{newplayer}
            </Alert>




        </div>
    );
};

export default Lobby;