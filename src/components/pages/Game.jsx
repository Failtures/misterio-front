import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ButtonThrowDice from "../Buttons/ButtonThrowDice";
import ButtonEndTurn from "../Buttons/ButtonEndTurn";
import { ws } from '../WebSocket'

const Game = () => {

    const params = useParams();
    const [dice, setDice] = useState(0);
    const match_name = params.game;
    const [turn, setTurn] = useState('');

    useEffect(() => {

        ws.onmessage = (e) => {

            const parsedJson = JSON.parse(e.data);

            if (parsedJson.action === 'roll_dice') {
                setDice(parsedJson.dice);
            }
            else if(parsedJson.action === 'turn_passed'){
                SetTurn(parsedJson.current_turn)
            }
        };
    });

    return (

        <div>
            <h1>Game</h1>
            
            <p>{turn}</p>

            <ButtonThrowDice matchName={match_name}/>
            <ButtonEndTurn matchName = {match_name}/>

            <p>{dice}</p>

        </div>
    );
};

export default Game;