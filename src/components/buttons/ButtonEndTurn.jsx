import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { ws, send_ } from '../WebSocket'

const ButtonEndTurn = (props) => {

    const takes = {
        'action': 'match_end_turn',
        'match_name': props.matchName
    };

    return (
        <div>
            <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                    ws.send(JSON.stringify(takes))
                }}
            >
                End Turn
            </Button>
        </div>

    );
};

export default ButtonEndTurn;