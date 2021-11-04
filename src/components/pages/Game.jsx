import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useModal } from '../../hooks/useModal'
import { ws } from '../WebSocket'
import ButtonAccuse from "../Buttons/ButtonAccuse";
import ButtonThrowDice from "../Buttons/ButtonThrowDice";
import ButtonEndTurn from "../Buttons/ButtonEndTurn";
import ModalWichCardAccuse from "../Modals/ModalWichCardAccuse";
import ModalWinOrLost from "../Modals/ModalWinOrLost";

import './Lobby.css'


const Game = () => {

    const [isOpenModal, openModal, closeModal] = useModal(false);
    const [isOpenWinOrLost, openModalWinOrLost, closeModalWinOrLost] = useModal(true);

    const params = useParams();
    const match_name = params.game;
    const [dice, setDice] = useState(0);
    const [turn, setTurn] = useState('');
    const [diceRolled, setDiceRolled] = useState(false);

    const [winner, setWinner] = useState('');
    const [loser, setLoser] = useState('');

    useEffect(() => {

        ws.onmessage = (e) => {

            const parsedJson = JSON.parse(e.data);
            console.log(parsedJson.action)

            if (parsedJson.action === 'roll_dice') {
                setDice(parsedJson.dice);
                if (diceRolled === false) {
                    setDiceRolled(true)
                }
            }
            else if (parsedJson.action === 'turn_passed') {
                setTurn(parsedJson.current_turn)
                if (diceRolled === true) {
                    setDiceRolled(false)
                }
            }
            else if (parsedJson.action === 'game_over') {
                setWinner(parsedJson.winner);
                console.log(`ganaste ${winner}`);
            }
            else if (parsedJson.action === 'player_deleted') {
                setLoser(parsedJson.loser)
                console.log(`perdiste ${loser}`);
            }
        };
    });

    return (

        <div>
            <h2>Game</h2>

            <p>{turn}</p>

            <ButtonThrowDice diceRolled={diceRolled} matchName={match_name} />
            <ButtonEndTurn matchName={match_name} />
            <ButtonAccuse openModal={openModal} />
            <ModalWichCardAccuse matchName={match_name} isOpen={isOpenModal} closeModal={closeModal} />
            
            <p>{dice}</p>

        </div >
    );
};

export default Game;