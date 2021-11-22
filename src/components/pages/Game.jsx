// imports
import React, { useEffect, useState, useContext, useRef } from "react";
import { makeStyles } from '@material-ui/styles'
import { Button } from "@material-ui/core";
import { ThemeContext } from '../../context/ContextGeneral';
import { Toaster, toast } from "react-hot-toast";
import { useModal } from '../../hooks/useModal'
import { ws } from '../WebSocket'
import { cardFun } from "../CardFunction"
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

import { Typography } from '@material-ui/core';

import Board from "../boardComponents/Board";
import Bloc from "./Bloc";
import ChatGame from "./ChatGame";
// CSS style
import './Lobby.css'
import './Game.css'
import './Chat.css'

const Game = () => {

    const dictStates = useContext(ThemeContext)

    const [isOpenAccuse, openModalAccuse, closeModalAccuse] = useModal(false)
    const [isOpenSuspect, openModalSuspect, closeModalSuspect] = useModal(false)
    const [isOpenWinOrLost, openModalWinOrLost, closeModalWinOrLost] = useModal(false)
    const [isOpenSalem, openModalSalem, closeModalSalem] = useModal(false)
    const [isOpenQuestion, openModalQuestion, closeModalQuestion] = useModal(false)

    const [dice, setDice] = useState(0)
    const [diceRolled, setDiceRolled] = useState(false)
    const [winner, setWinner] = useState('')
    const [loser, setLoser] = useState('')
    const [hand, setHand] = useState([])
    const [salem, setSalem] = useState({})
    const [suspect, setSuspect] = useState([])
    const [replyTo, setReplyTo] = useState('')
    const [buffer, setBuffer] = useState([])

    const refButtonMistery = useRef(null)

    const useStyle = makeStyles({
        token: {
            width: '35px',
            height: '35px',
            opacity: '0.6',
            backgroundColor: "white",
            borderRadius: '100%',
            border: '1px solid black',


        }
    });

    const classes = useStyle()

    useEffect(() => {

        ws.onmessage = (e) => {

            const parsedJson = JSON.parse(e.data)

            if (parsedJson.action === 'roll_dice') {
                setDice(parsedJson.dice)
                if (diceRolled === false) {
                    setDiceRolled(true)
                }
            }
            else if (parsedJson.action === 'turn_passed') {
                dictStates.setTurn(parsedJson.current_turn)
                if (diceRolled === true) {
                    setDiceRolled(false)
                }
            }
            else if (parsedJson.action === 'question') {

                setReplyTo(parsedJson.reply_to)

                const suspectCards = hand.filter(
                    card =>
                        card.name === parsedJson.monster ||
                        card.name === parsedJson.victim ||
                        card.name === parsedJson.room
                )

                if (suspectCards.length > 0) {
                    setSuspect(suspectCards)
                    openModalQuestion()
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
                    }

                    ws.send(JSON.stringify(takesQuestionNegative))
                }
            }
            else if (parsedJson.action === 'suspect_response') {
                toast(parsedJson.card)
            }
            else if (parsedJson.action === 'game_over') {
                setWinner(parsedJson.winner)
                openModalWinOrLost()
            }
            else if (parsedJson.action === 'player_deleted') {
                setLoser(parsedJson.loser)
                openModalWinOrLost()
                dictStates.setTurn(parsedJson.next_turn)
            }
            else if (parsedJson.action === 'player_position') {

                const updatePlayer = dictStates.playerPosition.map(player => {
                    if (player.player_name === dictStates.turn) {
                        return {
                            ...player,
                            pos_x: parsedJson.pos_x,
                            pos_y: parsedJson.pos_y
                        }
                    }
                    return player
                })

                dictStates.setPlayerPosition(updatePlayer)

                if (dictStates.nickname === dictStates.turn) {
                    dictStates.setPosY(parsedJson.pos_y)
                    dictStates.setPosX(parsedJson.pos_x)
                    dictStates.setSquare(parsedJson.square)
                }
            }
            else if (parsedJson.action === 'get_hand') {
                setHand(parsedJson.hand)
                setSalem(parsedJson.hand.find(element => element.name === "Salem Witch"))
            }
            else if (parsedJson.action === 'mystery_card') {
                toast(`The mistery card is ${parsedJson.card.name}`)
                setHand(hand.filter(card => card.name !== "Salem Witch"))
                refButtonMistery.current.style.display = "none"
                closeModalSalem()
            }
            else if (parsedJson.action === 'new_message') {
                const date = new Date(parsedJson.timestamp)
                setBuffer((buffer) => [...buffer, `${date.getHours()}:${date.getMinutes()} ${parsedJson.author}: ${parsedJson.message}`])
            }
        }
    })
    return (
        <div className="game-container">
            <Toaster
                position="bottom-center"
                reverseOrder={true}
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 5000,
                    style: {
                        background: '#ffffff',
                        color: '#e43621',
                    }
                }
                }
            />

            <div className="game-mid">

                <div className="game-list-chat">
                    <div className="game-list">
                        <ul style={{width:'80%', height:'50%' , display:'flex', flexDirection:'column', justifyContent:'space-between', listStyle:'none'}}>
                            {
                                dictStates.tokenColor.map((player) => (
                                    dictStates.turn === player.player
                                        ?
                                        <li>
                                            <div className="list-player-container" >
                                                <b style={{ color: 'white' }}
                                                >
                                                    {player.player}
                                                </b>
                                                <div className={classes.token} style={{ backgroundColor: `${player.color}`,  }}
                                                >
                                                </div>
                                            </div>
                                        </li >
                                        :
                                        <li>
                                            <div className="list-player-container">
                                                {player.player}
                                                <div className={classes.token} style={{ backgroundColor: `${player.color}` }}>
                                                </div>
                                            </div>
                                        </li>

                                ))
                            }
                        </ul>
                    </div>
                    <ChatGame className="game-chat" buffer={buffer}></ChatGame>
                </div>

                <Board />

                <div className="game-mid-buttons-dice-turn">

                    <div className="game-mid-dice-turn">
                        <Typography variant="h4" color="#fff">Turn: {dictStates.turn}</Typography>
                        <Typography variant="h4" color="#fff">Dice: {dice}</Typography>
                    </div>

                    <div className="game-mid-buttons">

                        <div className="dice-end">
                            <ButtonThrowDice />
                            <ButtonEndTurn />
                        </div>
                        <div className="accuse-suspect">
                            <ButtonAccuse openModal={openModalAccuse} />
                            <ButtonSuspect openModal={openModalSuspect} />
                        </div>

                        {salem &&
                            <Button ref={refButtonMistery}
                                variant="contained"
                                color="secondary"
                                onClick={openModalSalem}
                            >
                                <Typography variant="button" color="#fff">Salem</Typography>
                            </Button>
                        }
                        <Bloc hand={hand}></Bloc>
                    </div>
                    <div className="cards">
                        {hand.map(card => {
                            let url = cardFun(card)
                            return (
                                <img src={url} alt={card.name} />
                            )
                        }

                        )}
                    </div>

                </div>
            </div>

            <ModalWichCardAccuse isOpen={isOpenAccuse} closeModal={closeModalAccuse} />
            <ModalSalem isOpenSalem={isOpenSalem} closeModalSalem={closeModalSalem} />
            <MchooseCardsSuspect isOpen={isOpenSuspect} closeModal={closeModalSuspect} />
            <ModalWinOrLost isOpenWinOrLost={isOpenWinOrLost} closeModalWinOrLost={closeModalWinOrLost} loser={loser} winner={winner} />
            <ModalSuspect
                isOpenQuestion={isOpenQuestion}
                closeModalQuestion={closeModalQuestion}
                suspect={suspect}
                replyTo={replyTo}
            />

        </div>
    )
}

export default Game