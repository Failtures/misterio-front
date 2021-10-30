import React from "react";
import { Button } from "@material-ui/core";
import { ws } from "../WebSocket";

const ButtonStartGame = (props) => {

    return (
        <Button
            variant="contained"
            color="secondary"
            onClick={() => {
                ws.send(JSON.stringify({
                    'action': props.action,
                    'player_name': props.player_name,
                    'lobby_name': props.lobby_name
                }));
            }
            }
        >
            Start
        </Button>
    );
};

export default ButtonStartGame;