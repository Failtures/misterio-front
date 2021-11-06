import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
import { ws } from "../WebSocket";
import ButtonStartGame from "../buttons/ButtonStartGame";
import ButtonExitLobby from "../buttons/ButtonExitLobby";
import { useParams } from "react-router-dom";

import { ThemeContext } from '../../context/ContextGeneral';


const Lobby = () => {


    // const { nickname } = useContext(ThemeContext);

    const dictStates = useContext(ThemeContext)

    const params = useParams();
    const history = useHistory();

    // const [players, setPlayers] = useState([]);
    const [host, setHost] = useState('');
    const [lobbyName, setLobbyName] = useState('');
    const [exit, setExit] = useState(false)

    let arrayAuxiliar = [];

    useEffect(() => {

        ws.onmessage = (e) => {

            const parseJson = JSON.parse(e.data);
            console.log(parseJson.action)

            if (parseJson.action === 'new_lobby') {
                setLobbyName(parseJson.lobby.name);
                setHost(parseJson.lobby.host);
                dictStates.setPlayers(parseJson.lobby.players);
            }
            else if (parseJson.action === 'joined_lobby') {
                console.log(parseJson)
                dictStates.setPlayers(parseJson.lobby.players);
            }
            else if (parseJson.action === 'new_player') {
                arrayAuxiliar = dictStates.players.slice();
                arrayAuxiliar.push(parseJson.player_name);
                dictStates.setPlayers(arrayAuxiliar);
            }
            else if (parseJson.action === 'match_started') {
                console.log(parseJson);
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
                    lobby_name={lobbyName}
                    action={'lobby_start_match'}
                    player_name={host}
                >
                </ButtonStartGame>
            }
            <ButtonExitLobby lobby_name={params.game} exit={exit} />

        </div>
    );
};

export default Lobby;