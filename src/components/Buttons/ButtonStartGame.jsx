import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { ws } from "../WebSocket";

const ButtonStartGame = (props) => {

    const history = useHistory()

    //Takes: {'action': 'lobby_start_match', 'player_name': str, 'lobby_name': str}
    //Return: {'action': 'match_started', 'match': Match }

    useEffect(() => {

    });

    return (
        <Button
            variant="contained"
            color="secondary"
            onClick={() => {
                ws.send(JSON.stringify({
                    'action': props.action,
                    'player_name': props.player_name,
                    'lobby_name': props.lobby_name
                }))
                history.push(`/game/${props.lobby_name}`);       
            }}

        >
            Start
        </Button>
    );
};

export default ButtonStartGame;