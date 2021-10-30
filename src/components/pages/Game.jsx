import React from "react";
import { Button } from '@material-ui/core'
import ButtonThrowDice from "../Buttons/ButtonThrowDice";
import { useParams } from "react-router-dom";

const Game = () => {
    
    const params = useParams();

    return (
        
        <div>
            <h1>Game</h1>
            <ButtonThrowDice game={params.game}>

            </ButtonThrowDice>
        </div>
    );
};

export default Game;
