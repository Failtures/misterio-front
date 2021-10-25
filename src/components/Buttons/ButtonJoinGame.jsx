import React from "react";
import { Button } from "@material-ui/core";
import ws from "../../index" 

const ButtonJoinGame = (props) => {

  const takes = {
    "action": "lobby_join",
    "player_name": props.player,
    "lobby_name": props.gameName
  }

  return (
    <div>
      <Button 
        variant="contained" 
        color="secondary" 
        href="" 
        onClick={() => {
          ws.send(JSON.stringify(takes))}
        }> Join Game
      </Button>

    </div >

  );
};


export default ButtonJoinGame;