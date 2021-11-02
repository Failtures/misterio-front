import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ButtonThrowDice from "../Buttons/ButtonThrowDice";
import { ws } from '../WebSocket'
import './Lobby.css'


const Game = () => {

    const [modal, setModal] = useState(true);

    const openModal = () => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };

    const params = useParams();
    const [dice, setDice] = useState(0);
    const match_name = params.game;

    const takes = {
        'action': 'match_roll_dice',
        'match_name': match_name
    };


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

            <ButtonThrowDice dice={() => ws.send(JSON.stringify(takes))}>

            </ButtonThrowDice>
            {dice}

            <div className={`Modal ${modal && "open"}`} onClick={closeModal}>
                <div className="Modal-container">
                    <h2>Suerte para la proxima wachin!!</h2>
                </div>
            </div>


        </div>
    );
};

export default Game;