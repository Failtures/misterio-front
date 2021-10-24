import React, { useEffect, useState } from "react";
import ListGames from "../ListGames";
import { Button } from "@material-ui/core";
import axios from 'axios'
import api from '../../configs/api'
import { useHistory } from "react-router";

const ButtonJoinGame = (props) => {

  const history = useHistory()
  const [response, setResponse] = useState();

  const joinGame = async () => {

    try {

      const response = await axios({
        method: 'put',
        url: `${api.url}/join-player?name=${props.nameGame}&player=${props.player}`,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      const data = response.data;
      console.log(data)
      console.log(data.lobbies)





      /*
      if (data.lobbies != null) {
        history.push('/Prueba');
      }
      else {
        alert(`${data.info}`);
      }
      */
    }

    catch (error) {

      console.log(error, "The lobby is full or the player is already in the lobby");

    }

  };

  return (
    <div>
      <Button variant="contained" color="secondary" href="" onClick={async () => {
        
        try {

          const response = await axios({
            method: 'put',
            url: `${api.url}/join-player?name=${props.nameGame}&player=${props.player}`,

              /*'https://misterio-famaf.herokuapp.com/join-player?name=lobby%20perro&player=ale'*/
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });

          const data = response.data;
          console.log(data)
          console.log(data.lobbies)
          

        }

        catch (error) {

          console.log(error, "The lobby is full or the player is already in the lobby asdsadsadasdas");
          console.log(JSON.stringify(error));

        }
      }}> Join Game </Button>
    </div>
  );
};

export default ButtonJoinGame;