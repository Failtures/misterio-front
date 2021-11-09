// imports
import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from '../../context/ContextGeneral';
import { useModal } from '../../hooks/useModal'
import { ws } from '../WebSocket'
// Components
import ModalWichCardAccuse from "../modals/ModalWichCardAccuse";
import ModalWinOrLost from "../modals/ModalWinOrLost";
import MchooseCardsSuspect from "../modals/MchooseCardsSuspect";
import ModalSalem from "../modals/ModalSalem";

import ButtonAccuse from "../buttons/ButtonAccuse";
import ButtonThrowDice from "../buttons/ButtonThrowDice";
import ButtonEndTurn from "../buttons/ButtonEndTurn";
import ButtonSuspect from "../buttons/ButtonSuspect";

import Board from "../boardComponents/Board";

import Bloc from "./Bloc";
// CSS style
import './Lobby.css'


const Game = () => {

    const [isOpenAccuse, openModalAccuse, closeModalAccuse] = useModal(false);
    const [isOpenSuspect, openModalSuspect, closeModalSuspect] = useModal(false);
    const [isOpenWinOrLost, openModalWinOrLost, closeModalWinOrLost] = useModal(false);
    const [isOpenSalem, openModalSalem, closeModalSalem] = useModal(false);


    const dictStates = useContext(ThemeContext)

    const [dice, setDice] = useState(0);
    const [diceRolled, setDiceRolled] = useState(false);
    const [winner, setWinner] = useState('');
    const [loser, setLoser] = useState('');
    const [hand, setHand] = useState([]);

    useEffect(() => {

        ws.onmessage = (e) => {

            const parsedJson = JSON.parse(e.data);

            if (parsedJson.action === 'roll_dice') {
                setDice(parsedJson.dice);
                if (diceRolled === false) {
                    setDiceRolled(true)
                };
            }
            else if (parsedJson.action === 'turn_passed') {
                dictStates.setTurn(parsedJson.current_turn)
                if (diceRolled === true) {
                    setDiceRolled(false);
                };
            }
            else if (parsedJson.action === 'question') {
                console.log(parsedJson);
            }
            else if (parsedJson.action === 'game_over') {
                setWinner(parsedJson.winner);
                openModalWinOrLost();
            }
            else if (parsedJson.action === 'player_deleted') {
                setLoser(parsedJson.loser);
                openModalWinOrLost();
            }
            else if (parsedJson.action === 'player_position') {

                if (dictStates.nickname === dictStates.turn) {
                    dictStates.setPosY(parsedJson.pos_y)
                    dictStates.setPosX(parsedJson.pos_x)
                    dictStates.setSquare(parsedJson.square)
                }
            }
            else if (parsedJson.action === 'get_hand') {
                setHand(parsedJson.hand);
                const obj = parsedJson.hand.find(element => element.name === "Salem Witch")
                if (obj) {
                    openModalSalem();
                };
            }
            else if (parsedJson.action === 'mystery_card') {
            };
        };
    });

    return (
        <div>
            <h2>Game</h2>
            <p>turn: {dictStates.turn}</p>
            <p>Players:
                {
                    dictStates.players.map(item => (
                        <li>{(item === dictStates.nickname) ? item : <b>{item}</b>}</li>
                    ))
                }
            </p>
            <Board />
            <ButtonThrowDice />
            <ButtonEndTurn />
            <ButtonAccuse openModal={openModalAccuse} />
            <ButtonSuspect openModal={openModalSuspect} />
            <ModalWichCardAccuse isOpen={isOpenAccuse} closeModal={closeModalAccuse} />
            <ModalSalem isOpenSalem={isOpenSalem} closeModalSalem={closeModalSalem} />
            <MchooseCardsSuspect isOpen={isOpenSuspect} closeModal={closeModalSuspect} />
            <ModalWinOrLost
                isOpenWinOrLost={isOpenWinOrLost}
                closeModalWinOrLost={closeModalWinOrLost}
                loser={loser}
                winner={winner}
            />
            <p>{dice}</p>
            <Bloc />
            {hand.map(item => `${item.name}- `)}
        </div>
    );
};

export default Game;