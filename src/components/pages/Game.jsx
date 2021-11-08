import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useModal } from '../../hooks/useModal'
import { ThemeContext } from '../../context/ContextGeneral';
import { ws } from '../WebSocket'
import './Lobby.css'
import ButtonAccuse from "../buttons/ButtonAccuse";
import ButtonThrowDice from "../buttons/ButtonThrowDice";
import ButtonEndTurn from "../buttons/ButtonEndTurn";
import ModalWichCardAccuse from "../modals/ModalWichCardAccuse";
import ModalWinOrLost from "../modals/ModalWinOrLost";
import MchooseCardsSuspect from "../modals/MchooseCardsSuspect";
import ButtonSuspect from "../buttons/ButtonSuspect";
import Board from "../boardComponents/Board";
import ModalSalem from "../modals/ModalSalem";
import Bloc from "./Bloc";

const Game = () => {

    const [isOpenAccuse, openModalAccuse, closeModalAccuse] = useModal(false);
    const [isOpenSuspect, openModalSuspect, closeModalSuspect] = useModal(false);
    const [isOpenWinOrLost, openModalWinOrLost, closeModalWinOrLost] = useModal(false);
    const [isOpenSalem, openModalSalem, closeModalSalem] = useModal(false);


    const dictStates = useContext(ThemeContext)
    
    const params = useParams();
    const match_name = params.game;

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
                console.log(parsedJson);
                dictStates.setTurn(parsedJson.current_turn)
                if (diceRolled === true) {
                    setDiceRolled(false);
                };
            }
            else if (parsedJson.action === 'question') {
            }
            else if (parsedJson.action === 'game_over') {
                setWinner(parsedJson.winner);
                if (dictStates.nickname === parsedJson.winner) {
                    openModalWinOrLost();
                };
            }
            else if (parsedJson.action === 'player_deleted') {
                setLoser(parsedJson.loser);
                if (dictStates.nickname === parsedJson.loser) {
                    openModalWinOrLost();
                };
            }
            else if(parsedJson.action === 'player_position') {
                console.log(parsedJson);
                if(dictStates.nickname === dictStates.turn){
                    dictStates.setPosY(parsedJson.pos_y)
                    dictStates.setPosX(parsedJson.pos_x)
                }
                console.log(parsedJson.pos_x);
                console.log(parsedJson.pos_y);
            }
            else if (parsedJson.action === 'get_hand') {
                setHand(parsedJson.hand);
                console.log(parsedJson);
                const obj = parsedJson.hand.find(element => element.name === "Salem Witch")
                if (obj) {
                    openModalSalem();
                };
            }
            else if (parsedJson.action === 'mystery_card') {
                console.log(parsedJson.card);
            };
        };
    });

    return (

        <div>
            <h2>Game</h2>
            <p>{dictStates.turn}</p>
            <Board matchName={match_name}/>
            <ButtonThrowDice diceRolled={diceRolled} matchName={match_name} />
            <ButtonEndTurn matchName={match_name} />
            <ButtonAccuse openModal={openModalAccuse} />
            <ButtonSuspect openModal={openModalSuspect} />
            <ModalWichCardAccuse matchName={match_name} isOpen={isOpenAccuse} closeModal={closeModalAccuse} />
            <ModalSalem isOpenSalem={isOpenSalem} closeModalSalem={closeModalSalem} />
            <MchooseCardsSuspect isOpen={isOpenSuspect} closeModal={closeModalSuspect} match_name={match_name} />
            <ModalWinOrLost
                isOpenWinOrLost={isOpenWinOrLost}
                closeModalWinOrLost={closeModalWinOrLost}
                loser={loser}
                winner={winner}
            />

            <p>{dice}</p>

            <Bloc></Bloc>

            {hand.map(item => `${item.name}- `)}
        </div>
    );
};

export default Game;