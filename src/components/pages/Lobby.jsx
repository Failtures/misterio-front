import React, { useEffect, useState, useContext, useRef } from "react";
import { useHistory } from "react-router";
import { ws } from "../WebSocket";
import ButtonStartGame from "../buttons/ButtonStartGame";
import ButtonExitLobby from "../buttons/ButtonExitLobby";
import { useParams } from "react-router-dom";

import { ThemeContext } from '../../context/ContextGeneral';

import { Alert } from "@material-ui/core";
import { Snackbar } from "@material-ui/core";

const Lobby = () => {


    const history = useHistory();
    const alertRef = useRef(null);

    const [players, setPlayers] = useState([]);
    const [host, setHost] = useState('');

    const { nickname } = useContext(ThemeContext);

    const params = useParams();
    const match_name = params.game;

    const [newplayer, setNewPlayer] = useState('')


    const takesGetHand = {
        'action': 'match_get_hand',
        'player_name': nickname,
        'match_name': match_name
    };

    let arrayAuxiliar = [];

    useEffect(() => {

        ws.onmessage = (e) => {

            const parseJson = JSON.parse(e.data);
            console.log(parseJson.action)

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
                console.log(alertRef.current);
                alertRef.current.style.display = 'block';
                setNewPlayer(parseJson.player_name);

            }
            else if (parseJson.action === 'match_started') {
                ws.send(JSON.stringify(takesGetHand));
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
                />
            }
            <ButtonExitLobby lobby_name={match_name} />
            <Alert style={{ display: 'none' }} ref={alertRef} onClose={() => { alertRef.current.style.display = "none" }} variant="filled" severity="info">
                A new player has joined:{newplayer}
            </Alert>

       


        </div>
    );
};

export default Lobby;