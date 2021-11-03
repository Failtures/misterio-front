import React, { useContext } from 'react'
import { ws } from '../WebSocket'
import { ThemeContext } from '../context/ContextGeneral';
import { useHistory } from "react-router";
import { Button } from "@material-ui/core";

function ButtonExitLobby(props) {


    const history = useHistory()
    const { nickname } = useContext(ThemeContext);

    const takes = {
        'action': 'lobby_leave',
        'player_name': nickname,
        'lobby_name': props.lobby_name
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