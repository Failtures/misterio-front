// import
import React, { useState, useContext } from 'react'
import { Button } from '@material-ui/core'
import { ws } from '../WebSocket'
import { ThemeContext } from '../../context/ContextGeneral';
// CSS styles
import "./MchooseCardsSuspect.css";

const MchooseCardsSuspect = ({ isOpen, closeModal }) => {

    const dictStates = useContext(ThemeContext);

    const [victim, setVictim] = useState('')
    const [monster, setMonster] = useState('')

    const takes = {
        'action': 'match_suspect',
        'player_name': dictStates.nickname,
        'match_name': dictStates.lobbyName,
        'monster': monster,
        'victim': victim,
        'room': dictStates.square
    }

    const handleModalContainer = (e) => e.stopPropagation();

    return (
        <div className={`modal-suspect ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className="modal-container-suspect bcolor aside" onClick={handleModalContainer}>
                <button className="modal-close-suspect" onClick={closeModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" fill="#000" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" fill="#000" />
                    </svg>
                </button>
                <div className= "card-suspect-container">
                    <h2>Select to Suspect</h2>
                    
                    <div className= "victims-suspect">
                        <p>Victims:</p>
                        <img src="/gardener.png" alt="Gardener" onClick={(e) => setVictim(e.target.alt)} />
                        <img src="/maid.png" alt="Maid" onClick={(e) => setVictim(e.target.alt)} />
                        <img src="/butler.png" alt="Butler" onClick={(e) => setVictim(e.target.alt)} />
                        <img src="/count.png" alt="Count" onClick={(e) => setVictim(e.target.alt)} />
                        <img src="/countess.png" alt="Countess" onClick={(e) => setVictim(e.target.alt)} />
                        <img src="/housekeeper.png" alt="Housekeeper" onClick={(e) => setVictim(e.target.alt)} />
                    </div>

                    <div className= "monsters-suspect">
                        <p>Monsters:</p>
                        <img src="/dracula.png" alt="Dracula" onClick={(e) => setMonster(e.target.alt)} />
                        <img src="/frankenstein.png" alt="Frankenstein" onClick={(e) => setMonster(e.target.alt)} />
                        <img src="/werewolf.png" alt="Werewolf" onClick={(e) => setMonster(e.target.alt)} />
                        <img src="/ghost.png" alt="Ghost" onClick={(e) => setMonster(e.target.alt)} />
                        <img src="/mummy.png" alt="Mummy" onClick={(e) => setMonster(e.target.alt)} />
                        <img src="/dr.png" alt="Dr. Jekyll and Mr Hyde" onClick={(e) => setMonster(e.target.alt)} />
                    </div>

                    <div>
                        <p>Rooms: {dictStates.square}</p>
                    </div>

                    <p>{`Victim: ${victim} - Monster: ${monster} - Room: ${dictStates.square}`}</p>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => {
                            ws.send(JSON.stringify(takes));
                            closeModal();
                            dictStates.setButtonSuspect(false)
                        }
                        }> COMNFIRM SUSPECT
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default MchooseCardsSuspect


