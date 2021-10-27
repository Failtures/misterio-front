import React, {useEffect, useState} from "react";
import { Button } from '@material-ui/core'
import { useHistory } from "react-router";
import { ws } from "../WebSocket";


const Lobby = () => {

    const history = useHistory()
    const [players, setPlayers] = useState([])

    useEffect(() => {
        ws.onmessage = (e) => {
            const parseJson = JSON.parse(e.data)
            console.log(`lobby: ${parseJson.action}`);
            if (parseJson.action === 'new_player') {
                setPlayers(parseJson.player_name);
                console.log(players);
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
