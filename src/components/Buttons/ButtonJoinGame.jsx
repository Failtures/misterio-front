import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { ws, send_ } from "../WebSocket"


const ButtonJoinGame = (props) => {

  const history = useHistory()
 
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          send_(ws, 'lobby_join', props.player, props.nameGame);
          history.push(`/lobby/${props.nameGame}`);
        }
        }> Join Game
      </Button>
    </div >
  );
  
};

export default ButtonJoinGame;