import React from "react";
import { Button } from "@material-ui/core";
import { ws } from "../WebSocket";

const ButtonStartGame = (props) => {

    const takesStartGame = {
        'action': 'lobby_start_match',
        'player_name': props.player_name,
        'lobby_name': props.lobby_name
    }

    return (
        <Button
            color="secondary"
            onClick={() => {
                ws.send(JSON.stringify(takesStartGame));
            }}
        >
            Start
        </Button>
    );
};

export default ButtonStartGame;

