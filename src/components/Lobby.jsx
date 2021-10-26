import React from "react";

import { Button } from '@material-ui/core'
import { useHistory } from "react-router";

import ButtonStartGame from "./Buttons/ButtonStartGame";


const Lobby = () => {

    const history = useHistory()
    return (
        
        <div>
            <h1>Lobby</h1>

            <Button variant="contained" onClick={()=> history.push('/')} >Exit</Button>
            <ButtonStartGame></ButtonStartGame>

        </div>
    );
};

export default Lobby;
