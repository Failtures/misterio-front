import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
import { ws } from "../WebSocket";
import ButtonStartGame from "../buttons/ButtonStartGame";
import ButtonExitLobby from "../buttons/ButtonExitLobby";

import { ThemeContext } from '../../context/ContextGeneral';


const Lobby = () => {



    const dictStates = useContext(ThemeContext)

    const history = useHistory();

    const [host, setHost] = useState('');
    const [exit, setExit] = useState(false)

    let arrayAuxiliar = [];

    useEffect(() => {

        ws.onmessage = (e) => {

            const parseJson = JSON.parse(e.data);

            if (parseJson.action === 'new_lobby') {
                dictStates.setLobbyName(parseJson.lobby.name)
                setHost(parseJson.lobby.host);
                dictStates.setPlayers(parseJson.lobby.players);
            }
            else if (parseJson.action === 'joined_lobby') {
                dictStates.setLobbyName(parseJson.lobby.name)
                dictStates.setPlayers(parseJson.lobby.players);
            }
            else if (parseJson.action === 'new_player') {
                arrayAuxiliar = dictStates.players.slice();
                arrayAuxiliar.push(parseJson.player_name);
                dictStates.setPlayers(arrayAuxiliar);
            }
            else if (parseJson.action === 'match_started') {
                console.log(parseJson.match);
                for (let i = 0; i < parseJson.match.players.length; i++) {
                    dictStates.setPosition(parseJson.match.players[i], parseJson.match.player_position.player_position[i].pos_x, parseJson.match.player_position.player_position[i].pos_y)
                }

                console.log(dictStates.position);

                dictStates.setTurn(parseJson.match.turn)
                history.push(`/game/${parseJson.match.name}`);
            }
            else if (parseJson.action === 'player_left') {
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
                    dictStates.players.map(item => (
                        <li> {item} </li>
                    ))
                }
            </ul>
            {
                host &&
                <ButtonStartGame
                    action={'lobby_start_match'}
                    player_name={host}
                >
                </ButtonStartGame>
            }
            <ButtonExitLobby exit={exit} />

        </div>
    );
};

export default Lobby;