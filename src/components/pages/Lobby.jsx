import React, { useEffect, useState } from "react";
import { Button } from '@material-ui/core'
import { useHistory } from "react-router";
import { ws } from "../WebSocket";
import ButtonStartGame from "../Buttons/ButtonStartGame";


const Lobby = () => {

    const history = useHistory();
    const [players, setPlayers] = useState([]);
    const [host, setHost] = useState('');
    const [lobbyName, setLobbyName] = useState('');

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
            }
            else if (parseJson.action === 'new_player') {
                arrayAuxiliar = players.slice();
                arrayAuxiliar.push(parseJson.player_name);
                setPlayers(arrayAuxiliar);
            }
            else if (parseJson.action === 'match_started') {
                console.log('Partida comenzada');
                history.push(`/game/${parseJson.match.name}`);
            }
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

            <Button variant="contained" onClick={() => history.push('/')}>Exit</Button>
            {
                host &&
                <ButtonStartGame
                    lobby_name={lobbyName}
                    action={'lobby_start_match'}
                    player_name={host}
                >
                </ButtonStartGame>
            }

        </div>
    );
};

export default Lobby;