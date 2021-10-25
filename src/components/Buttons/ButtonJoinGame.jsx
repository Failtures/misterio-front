import React, { useEffect, useState, useRef } from "react";
import { Button } from "@material-ui/core";
import axios from 'axios'
import api from '../../configs/api'
import { useHistory } from "react-router";
import {ws} from "../../index" 

const ButtonJoinGame = (props) => {
  // const [button, setButton] = useState(false);
  // const [info, SetInfo] = useState([]);
  const takes = {
    "action": "lobby_join",
    "player_name": props.player,
    "lobby_name": props.gameName
  }

  return (
    <div>
      <Button variant="contained" color="secondary" href="" onClick={() => { ws.send(JSON.stringify(takes)) }}

      > Join Game

      </Button>

    </div >

  );
};


export default ButtonJoinGame;