import React, {useEffect, useState} from "react";
import { Button } from '@material-ui/core'
import { useHistory } from "react-router";
import { ws } from "../WebSocket";


const Lobby = () => {

    const history = useHistory()
    // const [button, setButton] = useState(false)
    const [players, setPlayers] = useState([])
    const [lobbyInfo, setLobbyInfo] = useState({})
    let arrayAuxiliar = []
    let new_player = 0
    let new_lobby = 0
    let joined_lobby = 0

    useEffect(() => {
        ws.onmessage = (e) => {
            const parseJson = JSON.parse(e.data)
            console.log(`lobby: ${parseJson.action}`);
            console.log(parseJson);
            if (parseJson.action === 'new_lobby') {
                new_lobby = new_lobby + 1;
                console.log(`new_lobby` &{new_lobby});
                console.log(parseJson);
                setPlayers(parseJson.lobby.players);
            }
            else if (parseJson.action === 'joined_lobby') {
                joined_lobby = joined_lobby + 1
                console.log(`joined_lobby` &{joined_lobby});
                setPlayers(parseJson.lobby.players);
                setLobbyInfo(parseJson);
            }
            else if(parseJson.action === 'new_player'){
                new_player = new_player + 1;
                console.log(`new_player` &{new_player});
                arrayAuxiliar = players.slice();
                arrayAuxiliar.push(parseJson.player_name);
                console.log(`Arrego auxiliar: ${arrayAuxiliar}`);
                setPlayers(... new Set(arrayAuxiliar));
                // players.push(parseJson.player_name)
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

            <Button variant="contained" onClick= {() => history.push('/')}>Exit</Button>

        </div>
    );
};

export default Lobby;