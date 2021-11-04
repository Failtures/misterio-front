import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { ws, send_ } from "../WebSocket"

const isOpenWs = (ws) => {
  return ws.readyState === ws.OPEN;
};


const ButtonJoinGame = (props) => {

  const history = useHistory()

  const handleJoinGame = () => {
    if(props.player === ''){
      alert('introduce nickname')
    }else{
      send_(ws, 'lobby_join', props.player, props.nameGame);
      history.push(`/lobby/${props.nameGame}`);
    }
  }
 
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          handleJoinGame()
        }
        }> Join Game
      </Button>
    </div >
  );
  
};

export default ButtonJoinGame;