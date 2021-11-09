// imports
import React, { useContext } from 'react'
import { ws } from '../WebSocket'
import { ThemeContext } from '../../context/ContextGeneral';
import { useHistory } from "react-router";
import { Button } from "@material-ui/core";

function ButtonExitLobby() {

    const dictStates = useContext(ThemeContext);

    const history = useHistory()
    
    const takes = {
        'action': 'lobby_leave',
        'player_name': dictStates.nickname,
        'lobby_name': dictStates.lobbyName
    };

    return (
        <Button 
            variant="contained"
            color="error"
            onClick={() => {
                ws.send(JSON.stringify(takes));
                history.push('/');
            }}
        >
            Exit
        </Button>
    );
};

export default ButtonExitLobby;
