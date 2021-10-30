import React, { useEffect, useState } from "react"
import { Button } from "@material-ui/core";
import { ws } from "../WebSocket"


const ButtonThrowDice = (props) => {

    const [dice, setDice] = useState('');

    useEffect(() => {

        ws.onmessage = (e) => {

            const parsedjson = JSON.parse(e.data);
            console.log(parsedjson.action);

            if (parsedjson.action === 'roll_dice') {
                setDice(`${parsedjson.dice}`);
            }
        };

    });

    return (
        <div>
            <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                    ws.send(JSON.stringify({ 'action': 'match_roll_dice', 'match_name': props.game }));
                    console.log(props.game)
                }
                }> Throw Dice
            </Button>
            <p>{dice}</p>
        </div>
    );
}

export default ButtonThrowDice;