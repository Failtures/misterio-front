import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { ws } from "../WebSocket";
import ButtonStartGame from "../Buttons/ButtonStartGame";
import ButtonExitLobby from "../Buttons/ButtonExitLobby";

const Lobby = () => {

    const history = useHistory();
    const [players, setPlayers] = useState([]);
    const [player, setPlayer] = useState('')
    const [host, setHost] = useState('');
    const [lobbyName, setLobbyName] = useState('');

    let latest = 0;
    let arrayAuxiliar = [];

    useEffect(() => {

        ws.onmessage = (e) => {

            const parseJson = JSON.parse(e.data);

            if (parseJson.action === 'new_lobby') {
                setLobbyName(parseJson.lobby.name);
                setHost(parseJson.lobby.host);
                setPlayers(parseJson.lobby.players);
            }
            else if (parseJson.action === 'joined_lobby') {
                setPlayers(parseJson.lobby.players);
                latest = parseJson.lobby.players.length - 1;
                setPlayer(parseJson.lobby.players[latest])
            }
            else if (parseJson.action === 'new_player') {
                arrayAuxiliar = players.slice();
                arrayAuxiliar.push(parseJson.player_name);
                setPlayers(arrayAuxiliar);
            }
            else if (parseJson.action === 'match_started') {
                history.push(`/game/${parseJson.match.name}`);
            }
            else if (parseJson.action === 'lobby_removed') {
                console.log(parseJson);
            }
            else if (parseJson.action === 'player_leaved') {
                console.log(parseJson);
            }
            console.log(parseJson);
        };

    });
    return (

        <div>
            <h1>Lobby</h1>
            <ul>
                {
                    players.map(item => (
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
            <ButtonExitLobby lobby_name={lobbyName} host={host} player={player}/>
        </div>
    );
};

export default Lobby;