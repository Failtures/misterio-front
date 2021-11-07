import React, { useContext, useRef } from "react";
import { ws } from '../WebSocket';
import { Button } from "@material-ui/core";
import { ThemeContext } from '../../context/ContextGeneral';

const ButtonUseSalem = ({ match_name, selection }) => {

  const { nickname } = useContext(ThemeContext);

  const buttonRef = useRef(null);

  const takesSalem = {
    'action': 'match_use_witch',
    'player_name': nickname,
    'match_name': match_name,
    'card_type': selection
  };

  return (
    <div>
      <Button
        ref={buttonRef}
        variant="contained"
        color="secondary"
        onClick={() => {
          ws.send(JSON.stringify(takesSalem));
          if (selection) { buttonRef.current.disabled = true }
        }}
      >
        Use Salem
      </Button>
    </div>
  );
};

export default ButtonUseSalem;