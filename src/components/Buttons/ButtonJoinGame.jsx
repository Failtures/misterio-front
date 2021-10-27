import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { ws } from "../../index"

const isOpenWs = (ws) => {
  return ws.readyState === ws.OPEN;
};


const ButtonJoinGame = (props) => {

  const history = useHistory()
  const [lobbyInfo, setLobbyInfo] = useState({})
  const [button, setButton] = useState(false)
  const takes = {
    "action": "lobby_join",
    "player_name": props.player,
    "lobby_name": props.nameGame
  }

  useEffect(() => {
    
    ws.onmessage = (e) => {
      const parseJson = JSON.parse(e.data)
      console.log(parseJson);
      if (parseJson.action === 'joined_lobby') {
        console.log(lobbyInfo);
        setLobbyInfo(parseJson)
        history.push(`/Lobby/:${props.nameGame}`)
      }
    };

  },[button]);

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        href=""
        onClick={() =>  { 
            if(isOpenWs(ws)){
              ws.send(JSON.stringify(takes))
            }
            setButton(!button) 
          }
        }> 
          Join Game
      </Button>

    </div >

  );
};


export default ButtonJoinGame;