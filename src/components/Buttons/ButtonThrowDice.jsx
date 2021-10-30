import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { ws } from '../WebSocket'

const ButtonThrowDice = (props) => {

  const [dice, setDice] = useState(0);

  const takes = {
    'action': 'match_roll_dice',
    'match_name': props.matchName
  };

  function isOpen(ws) { return ws.readyState === ws.OPEN }

  useEffect(() => {

    console.log('UseEffect')

    ws.onmessage = (e) => {

      const parsedJson = JSON.parse(e.data);
      console.log(parsedJson.action);

      if (parsedJson.action === 'roll_dice') {
        setDice(parsedJson.dice);
        console.log(`Dice: ${dice}`);
      };

    };

  });

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {ws.send(JSON.stringify(takes))}}
      > 
        Throw Dice
      </Button>

      <p>{dice}</p>
    </div>
  );
}


export default ButtonThrowDice;