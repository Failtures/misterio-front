import React from "react";
import { Button } from "@material-ui/core";

const ButtonThrowDice = (props) => {

  const takes = {
    'action': 'match_roll_dice',
    'match_name': props.matchName
  };

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => { props.dice() }}
      > Throw Dice
      </Button>
    </div>
  );
}

export default ButtonThrowDice;