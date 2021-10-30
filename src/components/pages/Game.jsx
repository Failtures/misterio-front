import React from "react";
import { useParams } from "react-router-dom";
import ButtonThrowDice from "../Buttons/ButtonThrowDice";


const Game = () => {

    const params = useParams();

    const match_name = params.game;

    return (

        <div>
            <h1>Game</h1>

            <ButtonThrowDice matchName = {match_name}>

            </ButtonThrowDice>

        </div>
    );
};

export default Game;