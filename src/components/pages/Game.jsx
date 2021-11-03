import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ButtonThrowDice from "../Buttons/ButtonThrowDice";
import ButtonEndTurn from "../Buttons/ButtonEndTurn";
import { ws } from '../WebSocket'
import './Lobby.css'


const Game = () => {

    const [modal, setModal] = useState(true);
    const params = useParams();
    const [dice, setDice] = useState(0);
    const match_name = params.game;
    const [turn, setTurn] = useState('');
    const [diceRolled, setDiceRolled] = useState(false);

    const openModal = () => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };


    const takes = {
        'action': 'match_roll_dice',
        'match_name': match_name
    };


    useEffect(() => {

        ws.onmessage = (e) => {

            const parsedJson = JSON.parse(e.data);

            if (parsedJson.action === 'roll_dice') {
                setDice(parsedJson.dice);
                if (diceRolled === false){
                    setDiceRolled(true)
                }
            }
            else if (parsedJson.action === 'turn_passed') {
                setTurn(parsedJson.current_turn)
                if(diceRolled === true){
                    setDiceRolled(false)
                }
            }
        };
    });

    return (

        <div>
            <h2>Game</h2>

            <p>{turn}</p>

            <ButtonThrowDice diceRolled = {diceRolled} matchName={match_name} />
            <ButtonEndTurn matchName={match_name} />

            <p>{dice}</p>

            <div className={`Modal ${modal && "open"}`} onClick={closeModal}>
                <div className="Modal-container">
                    <h2>Suerte para la proxima wachin!!</h2>
                </div>
            </div>
        </div>
    );
};

export default Game;