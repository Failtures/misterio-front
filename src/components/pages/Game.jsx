import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ButtonThrowDice from "../Buttons/ButtonThrowDice";
import { ws } from '../WebSocket'

const Game = () => {

    const params = useParams();
    const [dice, setDice] = useState(0);
    const match_name = params.game;

    useEffect(() => {

        ws.onmessage = (e) => {

            const parsedJson = JSON.parse(e.data);

            if (parsedJson.action === 'roll_dice') {
                setDice(parsedJson.dice);
            };
        };
    });

    return (

        <div>
            <h1>Game</h1>

            <ButtonThrowDice matchName={match_name}>

            </ButtonThrowDice>
            {dice}

        </div>
    );
};

export default Game;