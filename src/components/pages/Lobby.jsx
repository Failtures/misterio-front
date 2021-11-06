import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
import { ws } from "../WebSocket";
import ButtonStartGame from "../buttons/ButtonStartGame";
import ButtonExitLobby from "../buttons/ButtonExitLobby";
import { useParams } from "react-router-dom";

import { ThemeContext } from '../../context/ContextGeneral';

const Lobby = () => {


    const history = useHistory();

    const [players, setPlayers] = useState([]);
    const [host, setHost] = useState('');
  
    const { nickname } = useContext(ThemeContext);

    const params = useParams();
    const match_name = params.game;


    const takesGetHand = {
        'action': 'match_get_hand',
        'player_name': nickname,
        'match_name': match_name
    };

    const takesSalem = {
        'action': 'match_use_witch',
        'player_name': nickname,
        'match_name': match_name,
        'card_type': 'SALEM_WITCH'
    };

    let arrayAuxiliar = [];

    useEffect(() => {

        ws.onmessage = (e) => {

            const parseJson = JSON.parse(e.data);

            if (parseJson.action === 'new_lobby') {
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
                ws.send(JSON.stringify(takesGetHand))
                ws.send(JSON.stringify(takesSalem))
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
                    players.map(item => (
                        <li> {item} </li>
                    ))
                }
            </ul>

            {
                host &&
                <ButtonStartGame
                    lobby_name={match_name}
                    player_name={host}
                >
                </ButtonStartGame>
            }
            <ButtonExitLobby lobby_name={match_name} />

        </div>
    );
};

export default Lobby;