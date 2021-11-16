// imports
import React, { useEffect, useState, useContext, useRef } from "react";
import { Button } from "@material-ui/core";
import { ThemeContext } from '../../context/ContextGeneral';
import { useModal } from '../../hooks/useModal'
import { send_, ws } from '../WebSocket'
// Components
import ModalWichCardAccuse from "../modals/ModalWichCardAccuse";
import ModalWinOrLost from "../modals/ModalWinOrLost";
import MchooseCardsSuspect from "../modals/MchooseCardsSuspect";
import ModalSalem from "../modals/ModalSalem";
import ModalSuspect from "../modals/ModalSuspect";

import ButtonAccuse from "../buttons/ButtonAccuse";
import ButtonThrowDice from "../buttons/ButtonThrowDice";
import ButtonEndTurn from "../buttons/ButtonEndTurn";
import ButtonSuspect from "../buttons/ButtonSuspect";

import Board from "../boardComponents/Board";
import Bloc from "./Bloc";
// CSS style
import './Lobby.css'
import './Game.css'
import Chat from './Chat'


const Game = () => {

    const dictStates = useContext(ThemeContext);

    const [isOpenAccuse, openModalAccuse, closeModalAccuse] = useModal(false);
    const [isOpenSuspect, openModalSuspect, closeModalSuspect] = useModal(false);
    const [isOpenWinOrLost, openModalWinOrLost, closeModalWinOrLost] = useModal(false);
    const [isOpenSalem, openModalSalem, closeModalSalem] = useModal(false);
    const [isOpenQuestion, openModalQuestion, closeModalQuestion] = useModal(false);

    const [dice, setDice] = useState(0);
    const [diceRolled, setDiceRolled] = useState(false);
    const [winner, setWinner] = useState('');
    const [loser, setLoser] = useState('');
    const [hand, setHand] = useState([]);
    const [salem, setSalem] = useState({});
    const [mistery, setMistery] = useState('');
    const [suspect, setSuspect] = useState([]);
    const [replyTo, setReplyTo] = useState('');

    const refButtonMistery = useRef(null);

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

                setReplyTo(parsedJson.reply_to);

                const suspectCards = hand.filter(
                    card =>
                        card.name === parsedJson.monster ||
                        card.name === parsedJson.victim ||
                        card.name === parsedJson.room
                );

                if (suspectCards.length > 0) {
                    console.log('dentro del if')
                    setSuspect(suspectCards);
                    openModalQuestion();
                }
                else {
                    const takesQuestionNegative = {
                        'action': 'match_question_res',
                        'response': 'negative',
                        'player_name': dictStates.nickname,
                        'reply_to': parsedJson.reply_to,
                        'match_name': dictStates.lobbyName,
                        'reply_card': '',
                        'monster': parsedJson.monster,
                        'victim': parsedJson.victim,
                        'room': parsedJson.room
                    };

                    ws.send(JSON.stringify(takesQuestionNegative));
                }
            }
            else if (parsedJson.action === 'suspect_response') {
                console.log(parsedJson.card);
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

                const updatePlayer = dictStates.playerPosition.map( player => {
                    if(player.player_name === dictStates.turn) {
                        return {
                            ...player,
                            pos_x: parsedJson.pos_x,
                            pos_y: parsedJson.pos_y
                        }
                    }
                    return player
                });

                dictStates.setPlayerPosition(updatePlayer)

                if (dictStates.nickname === dictStates.turn) {
                    dictStates.setPosY(parsedJson.pos_y)
                    dictStates.setPosX(parsedJson.pos_x)
                    dictStates.setSquare(parsedJson.square)
                }
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
        <div className="game-container">
            <p>turn: {dictStates.turn}</p>
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

            <ModalSuspect
                isOpenQuestion={isOpenQuestion}
                closeModalQuestion={closeModalQuestion}
                suspect={suspect}
                replyTo={replyTo}
            />

            {salem && <Button ref={refButtonMistery} variant="contained"
                color="secondary" onClick={openModalSalem}>Use Salem</Button>}
            {mistery && <p>{`Mistery card: ${mistery}`}</p>}

            <p>{dice}</p>
            
            <div className="cards">
                {hand.map(card => {
                    let url = ''
                    if (card.name === 'Dracula') {
                        url = '/dracula.png'
                    }
                    else if (card.name === 'Frankenstein') {
                        url = '/frankenstein.png'
                    }
                    else if (card.name === 'Werewolf') {
                        url = '/werewolf.png'
                    }
                    else if (card.name === 'Ghost') {
                        url = '/ghost.png'
                    }
                    else if (card.name === 'Mummy') {
                        url = '/mummy.png'
                    }
                    else if (card.name === 'Dr. Jekyll and Mr Hyde') {
                        url = '/dr.png'
                    }
                    else if (card.name === 'Gardener') {
                        url = '/gardener.png'
                    }
                    else if (card.name === 'Maid') {
                        url = '/maid.png'
                    }
                    else if (card.name === 'Butler') {
                        url = '/butler.png'
                    }
                    else if (card.name === 'Count') {
                        url = '/count.png'
                    }
                    else if (card.name === 'Countess') {
                        url = '/countess.png'
                    }
                    else if (card.name === 'Housekeeper') {
                        url = '/housekeeper.png'
                    }
                    else if (card.name === 'Bedroom') {
                        url = '/bedroom.png'
                    }
                    else if (card.name === 'Library') {
                        url = '/library.png'
                    }
                    else if (card.name === 'Cellar') {
                        url = '/cellar.png'
                    }
                    else if (card.name === 'Garage') {
                        url = '/garage.png'
                    }
                    else if (card.name === 'Laboratory') {
                        url = '/laboratory.png'
                    }
                    else if (card.name === 'Pantheon') {
                        url = '/pantheon.png'
                    }
                    else if (card.name === 'Dining') {
                        url = '/dining.png'
                    }
                    else if (card.name === 'Living') {
                        url = '/living.png'
                    }
                    else if (card.name === 'Salem Witch') {
                        url = '/bruja_salem.png'
                    }
                    return (
                        <div style={{ width: '8%' }}>
                            <img style={{ width: '100%' }} src={url} alt={hand.name} />
                        </div>
                    )
                }

                )}
            </div>
        </div>
    );
};

export default Game;