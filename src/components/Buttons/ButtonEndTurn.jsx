import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { ws } from '../WebSocket'

const ButtonEndTurn = (props) => {

    // const [turn, setTurn] = useState('');
    const takes = {
        'action': 'match_end_turn',
        'match_name': props.matchName
    };
    useEffect(() => {
        ws.onmessage = (e) => {
            const parsedJson = JSON.parse(e.data);
            if (parsedJson.action === 'turn_passed') {
                console.log(parsedJson)
                // setTurn(parsedJson)
            }
        }
    });


    <Button
        variant="contained"
        color="secondary"
        onClick={() => { ws.send(JSON.stringify(takes)) }}
    >
        End Turn
    </Button>

}


export default ButtonEndTurn;