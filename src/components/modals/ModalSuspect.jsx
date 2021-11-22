// import
import React, { useState, useContext } from 'react'
import { ws } from '../WebSocket'
import { cardFun } from '../CardFunction'


import { Button } from "@material-ui/core"

import { ThemeContext } from '../../context/ContextGeneral'

import { Typography } from '@material-ui/core'

// CSS styles
import "./ModalSuspect.css"


const ModalSuspect = ({ isOpenQuestion, closeModalQuestion, suspect, replyTo }) => {

    const dictStates = useContext(ThemeContext)

    const [selection, setSelection] = useState('')

    const takesQuestionPositive = {
        'action': 'match_question_res',
        'response': 'affirmative',
        'player_name': dictStates.nickname,
        'reply_to': replyTo,
        'match_name': dictStates.lobbyName,
        'reply_card': selection
    }

    const handleModalContainer = (e) => e.stopPropagation()

    return (

        <div className={`modal-question-suspect-container ${isOpenQuestion && "is-open-question-suspect"}`} onClick={closeModalQuestion}>
            <div className="modal-question-suspect" onClick={handleModalContainer}>
                <button className="modal-close-question-suspect" onClick={closeModalQuestion}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" fill="#000" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" fill="#000" />
                    </svg>
                </button>

                <div className="cards-to-show">
                    <Typography variant="h2" color="#fff">Choose a card to show</Typography>
                    <div className="cards-question-container">
                        {
                            suspect.map((card) => (
                                <img width="150px" height="200px" src={cardFun(card)} alt={card.name} onClick={(e) => setSelection(e.target.alt)} />
                            ))
                        }
                    </div>
                    <Typography variant="body1" color="#fff">{`Selection: ${selection}`}</Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => {
                            if (selection) {
                                ws.send(JSON.stringify(takesQuestionPositive))
                                closeModalQuestion()
                                setSelection('')
                            }
                        }}
                    >
                        <Typography variant="button" color="#fff">Confirm</Typography>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ModalSuspect


