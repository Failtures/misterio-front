// imports
import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { ws, send_ } from "../WebSocket"
import { ThemeContext } from "../../context/ContextGeneral";

const ButtonJoinGame = (props) => {

  const dictStates = useContext(ThemeContext)

  const history = useHistory()

  const handleJoinGame = () => {
    if (dictStates.nickname === '') {
      alert('introduce nickname')
    } else {
      send_(ws, 'lobby_join', dictStates.nickname, props.nameGame);
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
        }}>
        Join Game
      </Button>
    </div >
  );
};

export default ButtonJoinGame;