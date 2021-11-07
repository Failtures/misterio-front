import React, { useContext } from "react";
import { ws } from '../WebSocket';
import { Button } from "@material-ui/core";
import { ThemeContext } from '../../context/ContextGeneral';

const ButtonUseSalem = ({ match_name, selection }) => {

  const { nickname } = useContext(ThemeContext);

  console.log(nickname)
  console.log(match_name)

  const takesSalem = {
    'action': 'match_use_witch',
    'player_name': nickname,
    'match_name': match_name,
    'card_type': selection
  };

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          console.log(`${nickname} presiono el boton en el juego ${match_name}`)
          ws.send(JSON.stringify(takesSalem))
        }}
      >
        Use Salem
      </Button>
    </div>


  );
};

export default ButtonUseSalem;