import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useModal } from '../../hooks/useModal'
import { ws } from '../WebSocket'
import './Lobby.css'
import ButtonAccuse from "../buttons/ButtonAccuse";
import ButtonThrowDice from "../buttons/ButtonThrowDice";
import ButtonEndTurn from "../buttons/ButtonEndTurn";
import ModalWichCardAccuse from "../modals/ModalWichCardAccuse";
import ModalWinOrLost from "../modals/ModalWinOrLost";
import MchooseCardsSuspect from "../modals/MchooseCardsSuspect";

import Bloc from "./Bloc";

import { ThemeContext } from '../../context/ContextGeneral';

const Game = () => {

    const [isOpenAccuse, openModalAccuse, closeModalAccuse] = useModal(false);
    const [isOpenSuspect, openModalSuspect, closeModalSuspect] = useModal(false);
    const [isOpenWinOrLost, openModalWinOrLost, closeModalWinOrLost] = useModal(false);

    const params = useParams();
    const match_name = params.game;

    const [dice, setDice] = useState(0);
    const [turn, setTurn] = useState('');
    const [diceRolled, setDiceRolled] = useState(false);

    const [winner, setWinner] = useState('');
    const [loser, setLoser] = useState('');

    const { nickname } = useContext(ThemeContext);

    const [hand, setHand] = useState([]);


    useEffect(() => {
        console.log('useefect')
        
        ws.onmessage = (e) => {
           
            const parsedJson = JSON.parse(e.data);

            console.log(parsedJson.action)

            if (parsedJson.action === 'roll_dice') {
                setDice(parsedJson.dice);
                if (diceRolled === false) {
                    setDiceRolled(true)
                };
            }
            else if (parsedJson.action === 'turn_passed') {
                setTurn(parsedJson.current_turn)
                if (diceRolled === true) {
                    setDiceRolled(false)
                };
            }
            else if (parsedJson.action === 'question') {
            }
            else if (parsedJson.action === 'game_over') {
                setWinner(parsedJson.winner);
                if (nickname == parsedJson.winner) {
                    openModalWinOrLost()
                };
            }
            else if (parsedJson.action === 'player_deleted') {
                setLoser(parsedJson.loser);
                if (nickname == parsedJson.loser) {
                    openModalWinOrLost()
                };
            }
            else if (parsedJson.action === 'get_hand') {
                setHand(parsedJson.hand);
            }
            else if (parsedJson.action === 'mystery_card') {
                console.log(parsedJson.action);
            };
        };
    });

    return (

        <div>
            <h2>Game</h2>

            <p>{turn}</p>

            <ButtonThrowDice diceRolled={diceRolled} matchName={match_name} />
            <ButtonEndTurn matchName={match_name} />
            <ButtonAccuse openModal={openModalAccuse} />
            <ModalWichCardAccuse matchName={match_name} isOpen={isOpenAccuse} closeModal={closeModalAccuse} />
            <button onClick={() => openModalSuspect()}>Suspect</button>
            <MchooseCardsSuspect isOpen={isOpenSuspect} closeModal={closeModalSuspect} match_name={match_name} />

            <ModalWinOrLost
                isOpenWinOrLost={isOpenWinOrLost}
                closeModalWinOrLost={closeModalWinOrLost}
                loser={loser}
                winner={winner}
            />

            <p>{dice}</p>

            <Bloc></Bloc>

            {hand.map(item => item.name)}
        </div>
    );
};

export default Game;