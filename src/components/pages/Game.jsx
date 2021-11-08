import React, { useEffect, useState, useContext, useRef } from "react";
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
import { Button } from "@material-ui/core";
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

    const [salem, setSalem] = useState({});

    const [mistery, setMistery] = useState('');

    const refButtonMistery = useRef(null);

    useEffect(() => {

        ws.onmessage = (e) => {

            const parsedJson = JSON.parse(e.data);
            console.log(parsedJson.action);

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
                console.log(parsedJson);
                if (dictStates.nickname === dictStates.turn) {
                    dictStates.setPosY(parsedJson.pos_y)
                    dictStates.setPosX(parsedJson.pos_x)
                    dictStates.setSquare(parsedJson.square)
                }
                console.log(parsedJson.pos_x);
                console.log(parsedJson.pos_y);
            }
            else if (parsedJson.action === 'get_hand') {
                setHand(parsedJson.hand);
                setSalem(parsedJson.hand.find(element => element.name === "Salem Witch"));
            }
            else if (parsedJson.action === 'mystery_card') {
                setMistery(parsedJson.card.name);
                setHand(hand.filter(card => card.name !== "Salem Witch"));
                refButtonMistery.current.style.display = "none";
                closeModalSalem();
            };
        };
    });

    return (

        <div>
            <h2>Game</h2>
            <p>{dictStates.turn}</p>
            <Board matchName={match_name} />
            <ButtonThrowDice diceRolled={diceRolled} />
            <ButtonEndTurn />
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

            {salem && <Button ref={refButtonMistery} variant="contained"
                color="secondary" onClick={openModalSalem}>Use Salem</Button>}
            {mistery && <p>{`Mistery card: ${mistery}`}</p>}

            <p>{dice}</p>

            <Bloc></Bloc>

            {hand.map(item => `${item.name}- `)}

        </div>
    );
};

export default Game;