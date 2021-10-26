import React, {useEffect, useState} from "react";

import { Button } from '@material-ui/core'
import { useHistory } from "react-router";

import ButtonStartGame from "./Buttons/ButtonStartGame";
import { ws } from "../index";


const Lobby = () => {

    const history = useHistory()
    const [players, setPlayers] = useState([])

    useEffect(() => {
        ws.onmessage = (e) => {
            const parseJson = JSON.parse(e.data)
    
            if (parseJson.action === 'new_player') {
                setPlayers(parseJson.player_name);
            }
        };

    });

    return (

        <div>
            <h1>Lobby</h1>
            <ul>
                {
                    players.map(item => (
                        <li> item </li>
                    ))
                }
            </ul>

            <Button variant="contained">Exit</Button>

        </div>
    );
};

export default Lobby;
