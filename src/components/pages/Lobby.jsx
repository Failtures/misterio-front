import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
import { ws } from "../WebSocket";
import ButtonStartGame from "../buttons/ButtonStartGame";
import ButtonExitLobby from "../buttons/ButtonExitLobby";

import { ThemeContext } from '../../context/ContextGeneral';


const Lobby = () => {

    const colors_token = ['green', 'blue', 'red', 'yellow', 'pink', 'orange']
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
                let pos = 0;
                let pos_x = 0;
                let pos_y = 0;
                // console.log(parseJson.match.player_position.player_position);
                for (let i = 0; i < parseJson.match.player_position.player_position.length; i++) {

                    if(dictStates.nickname === parseJson.match.player_position.player_position[i].player_name) {
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
            }
            else if (parseJson.action === 'lobby_removed') {
                history.push('/');
            }
        };
    });

    console.log(`turno inicial: ${dictStates.turn}`);
    console.log(`color del jugador: ${dictStates.tokenColor}`);
    console.log(`posicion X inicial: ${dictStates.posX}`);
    console.log(`posicion Y inicial: ${dictStates.posY}`);
    

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