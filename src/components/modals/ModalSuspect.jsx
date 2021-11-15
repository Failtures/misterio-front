// import
import React, { useState, useContext } from 'react'

import { Button } from "@material-ui/core";

import { ThemeContext } from '../../context/ContextGeneral';

// CSS styles
import "./ModalSuspect.css"
import { ws } from '../WebSocket';

const ModalSuspect = ({ isOpenQuestion, closeModalQuestion, suspect, replyTo }) => {

    const dictStates = useContext(ThemeContext);

    const [selection, setSelection] = useState('');

    const takesQuestionPositive = {
        'action': 'match_question_res',
        'response': 'affirmative',
        'player_name': dictStates.nickname,
        'reply_to': replyTo,
        'match_name': dictStates.lobbyName,
        'reply_card': selection
    };

    const handleModalContainer = (e) => e.stopPropagation();

    return (

        <div className={`modal-question-suspect ${isOpenQuestion && "is-open"}`} onClick={closeModalQuestion}>
            <div className="modal-container-question-suspect bcolor aside" onClick={handleModalContainer}>
                <button className="modal-close-question-suspect" onClick={closeModalQuestion}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" fill="#000" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" fill="#000" />
                    </svg>
                </button>
                <form>
                    <h2>Take card</h2>
                    {
                        suspect.map((card) => (

                            <label>{card.name} <input type="radio" value={card.name} name="gender" onClick={(e) => setSelection(e.target.value)} /></label>
                        ))
                    } 
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => {
                            ws.send(JSON.stringify(takesQuestionPositive));
                            closeModalQuestion();
                        }}
                    >
                        Confirm
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default ModalSuspect;


