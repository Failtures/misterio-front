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

    useEffect(() => {
        ws.onmessage = (e) => {
            const parseJson = JSON.parse(e.data)
            console.log(`lobby: ${parseJson.action}`);
            console.log(parseJson);

            if (parseJson.action === 'joined_lobby') {
                setPlayers(parseJson.lobby.players);
            }
            /*
            else if(parseJson.action === 'new_player'){
                arrayAuxiliar = players.slice()
                arrayAuxiliar.push(parseJson.player_name)
                console.log(`Arrego auxiliar: ${arrayAuxiliar}`);
                setPlayers(arrayAuxiliar)
                // players.push(parseJson.player_name)
            }
            */
        };

    });

    // console.log(arrayAuxiliar);

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