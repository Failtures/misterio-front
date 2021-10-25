import React from "react"
import { Button } from "@material-ui/core";
import ws from "../../index"

const ButtonThrowDice = () => {
  
  const takes = {
    "action": "match_roll_dice"
  }

  return (
    <div>
      <Button 
        variant="contained" 
        color="secondary" 
        onClick={
          ws.send(JSON.stringify(takes))
        }> Throw Dice
      </Button>
    </div>
  );
}


export default ButtonThrowDice