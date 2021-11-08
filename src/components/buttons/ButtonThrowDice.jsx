import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { ws } from '../WebSocket'
import { ThemeContext } from "../../context/ContextGeneral";

const ButtonThrowDice = (props) => {

  const dictStates = useContext(ThemeContext)

  const takes = {
    'action': 'match_roll_dice',
    'match_name': dictStates.lobbyName
  };

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        disabled = {dictStates.nickname === dictStates.turn ? false : true}
        onClick={() => {
          ws.send(JSON.stringify(takes))
          
        }}
      >
         Throw Dice
      </Button>
    </div>
  );
}

export default ButtonThrowDice;