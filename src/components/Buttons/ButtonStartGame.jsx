import React, {useContext} from "react";
import { ws } from "../WebSocket";
import { ThemeContext } from '../context/ContextGeneral';

import { Button } from "@material-ui/core";

const ButtonStartGame = (props) => {

    const { gameName } = useContext(ThemeContext);

    const takes = {
        'action': 'lobby_start_match',
        'player_name': props.player_name,
        'lobby_name': gameName
    };

    return (
        <Button
            variant="contained"
            color="secondary"
            onClick={() => {
                ws.send(JSON.stringify(takes));
            }}
        >
            Start
        </Button>
    );
};

export default ButtonStartGame;
