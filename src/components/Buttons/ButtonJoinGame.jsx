import React from "react";
import { Button } from "@material-ui/core";
import axios from 'axios'
import api from '../../configs/api'
import { useHistory } from "react-router";

const ButtonJoinGame = (props) => {

  const history = useHistory()

  return (
    <div>
      <Button variant="contained" color="secondary" href="" onClick={async () => {

        try {

          const response = await axios({
            method: 'post',
            url: `${api.url}/join-player?name=${props.nameGame}&player=${props.player}`,
            headers: {
              'Content-Type': 'multipart/form-data',
            }
          });

          history.push('/')
        }

        catch (error) {
          console.log(error, "The lobby is full or the player is already in the lobby");
        }

      }
      }> Join Game </Button>
    </div>
  );
};

export default ButtonJoinGame;