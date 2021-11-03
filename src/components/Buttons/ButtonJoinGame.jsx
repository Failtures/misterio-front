import React, { useContext } from "react";
import { useHistory } from "react-router";
import { ThemeContext } from '../context/ContextGeneral';
import { ws } from "../WebSocket";

import { Button } from "@material-ui/core";

const ButtonJoinGame = () => {

  const history = useHistory();
  const { nickname, gameName } = useContext(ThemeContext);

  const takes = {
    'action': 'lobby_join',
    'player_name': nickname,
    'lobby_name': gameName
  };

  const handleJoinGame = () => {

    if (nickname === '') {
      alert('introduce nickname');
    }
    else {
      ws.send(JSON.stringify(takes));
      history.push(`/lobby/${gameName}`);
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          handleJoinGame();
        }
        }> Join Game
      </Button>
    </div>
  );

};

export default ButtonJoinGame;