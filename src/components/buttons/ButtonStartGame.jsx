import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { ws } from "../WebSocket";
import { ThemeContext } from "../../context/ContextGeneral";

const ButtonStartGame = (props) => {

    const dictStates = useContext(ThemeContext)
    
    return (
        <Button
            color="secondary"
            onClick={() => {
                ws.send(JSON.stringify({
                    'action': props.action,
                    'player_name': props.player_name,
                    'lobby_name': dictStates.lobbyName
                }));
            }
            }
        >
            Start
        </Button>
    );
};

export default ButtonStartGame;

