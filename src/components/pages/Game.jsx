import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useModal } from '../../hooks/useModal'
import { ws } from '../WebSocket'
import ButtonAccuse from "../Buttons/ButtonAccuse";
import ButtonThrowDice from "../Buttons/ButtonThrowDice";
import ButtonEndTurn from "../Buttons/ButtonEndTurn";
<<<<<<< HEAD
import ModalWichCardAccuse from "../modals/ModalWichCardAccuse";
=======
import ModalWichCardAccuse from "../Modals/ModalWichCardAccuse";
import ModalWinOrLost from "../Modals/ModalWinOrLost";

>>>>>>> Modal-WichCardAccuse
import './Lobby.css'
import MchooseCardsSuspect from "../modals/MchooseCardsSuspect";


const Game = () => {

    const [isOpenModal, openModal, closeModal] = useModal(false);
<<<<<<< HEAD

    // const [modal, setModal] = useState(false);
=======
    const [isOpenWinOrLost, openModalWinOrLost, closeModalWinOrLost] = useModal(true);

>>>>>>> Modal-WichCardAccuse
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
            else if(parsedJson.action === 'question') {
                console.log(parsedJson);
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
            <button onClick={()=> openModal()}>Suspect</button>
            <MchooseCardsSuspect isOpen={isOpenModal} closeModal={closeModal} match_name={match_name}/>
            
            <p>{dice}</p>
        </div>
    );
};

export default Game;