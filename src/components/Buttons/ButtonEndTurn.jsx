import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { ws, send_ } from '../WebSocket'

const ButtonEndTurn = (props) => {

    // const [turn, setTurn] = useState('');
    // const [buttonEndTurn, setButtonEndTurn] = useState(false)
    const takes = {
        'action': 'match_end_turn',
        'match_name': props.matchName
    };
    // useEffect(() => {
    //     console.log('dentro del useEffect del buttonEndGame');
    //     ws.onmessage = (e) => {
    //         console.log("en el onmessage del buttonEndTurn");
    //         console.log(e);
    //         const parsedJson = JSON.parse(e.data);
    //         if (parsedJson.action === 'turn_passed') {
    //             console.log(parsedJson)
    //             // setTurn(parsedJson)
    //         }
    //     }
    // }, [buttonEndTurn]);
    return (
        <Button
            variant="contained"
            color="secondary"
            onClick={() => { 
                // setButtonEndTurn(!buttonEndTurn)
                ws.send(JSON.stringify(takes)) 
                // send_(ws, 'match_end_turn', props.matchName)
            }}
        >
            End Turn
        </Button>
    )

}


export default ButtonEndTurn;