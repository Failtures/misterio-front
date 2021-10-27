import React, {useState, useEffect} from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { ws, send_ } from "../WebSocket"


const ButtonJoinGame = (props) => {
  
  const history = useHistory()
  const [button, setButton] = useState(false)
  const [lobbyInfo, setLobbyInfo] = useState({})
  // const takes = {
  //   "action": "lobby_join",
  //   "player_name": props.player,
  //   "lobby_name": props.nameGame
  // }

  useEffect(() => {
    ws.onmessage = (e) => {
      setLobbyInfo(JSON.parse(e.data));
      const parseJson = JSON.parse(e.data)
      console.log(`A: ${parseJson.action}`);
      if (parseJson.action === 'lobby_join') {
        console.log(parseJson);
        history.push(`Lobby/${lobbyInfo}`)
      }
    };

  },[button]);

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        href=""
        onClick={() => {send_(ws, 'lobby_join', props.player, props.nameGame)
                        setButton(!button)}
        }> Join Game
      </Button>

    </div >

  );
};


export default ButtonJoinGame;