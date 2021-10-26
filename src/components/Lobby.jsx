import React from "react";
import { Button } from '@material-ui/core'
import ButtonCreateGame from "./Buttons/ButtonCreateGame";
import { useHistory } from "react-router";

const Lobby = () => {

    const history = useHistory()
    return (
        
        <div>
            <h1>Lobby</h1>
            <ButtonCreateGame></ButtonCreateGame>
            <Button variant="contained" onClick={()=> history.push('/')} >Exit</Button>
        </div>
    );
};

export default Lobby;
