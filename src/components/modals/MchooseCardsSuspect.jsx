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
        <div className={`modal-suspect-container ${isOpen && "is-open-suspect"}`}
            onClick={closeModal}>

            <div className="modal-suspect" onClick={handleModalContainer}>
                <button className="modal-close-suspect" onClick={closeModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" fill="#000" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" fill="#000" />
                    </svg>
                </button>

                <div className="cards-suspect-container">
                    <h2>Select to Suspect</h2>

                    <div className="victims-suspect-container">
                        <h3>Victims:</h3>
                        <div className="Victims">
                            <img width="150px" height="200px" src="/gardener.png" alt="Gardener" onClick={(e) => setVictim(e.target.alt)} />
                            <img width="150px" height="200px" src="/maid.png" alt="Maid" onClick={(e) => setVictim(e.target.alt)} />
                            <img width="150px" height="200px" src="/butler.png" alt="Butler" onClick={(e) => setVictim(e.target.alt)} />
                            <img width="150px" height="200px" src="/count.png" alt="Count" onClick={(e) => setVictim(e.target.alt)} />
                            <img width="150px" height="200px" src="/countess.png" alt="Countess" onClick={(e) => setVictim(e.target.alt)} />
                            <img width="150px" height="200px" src="/housekeeper.png" alt="Housekeeper" onClick={(e) => setVictim(e.target.alt)} />
                        </div>
                    </div>

                    <div className="monsters-suspect-container">
                        <h3>Monsters:</h3>
                        <div className="Monsters">
                            <img width="150px" height="200px" src="/dracula.png" alt="Dracula" onClick={(e) => setMonster(e.target.alt)} />
                            <img width="150px" height="200px" src="/frankenstein.png" alt="Frankenstein" onClick={(e) => setMonster(e.target.alt)} />
                            <img width="150px" height="200px" src="/werewolf.png" alt="Werewolf" onClick={(e) => setMonster(e.target.alt)} />
                            <img width="150px" height="200px" src="/ghost.png" alt="Ghost" onClick={(e) => setMonster(e.target.alt)} />
                            <img width="150px" height="200px" src="/mummy.png" alt="Mummy" onClick={(e) => setMonster(e.target.alt)} />
                            <img width="150px" height="200px" src="/drr.png" alt="Dr. Jekyll and Mr Hyde" onClick={(e) => setMonster(e.target.alt)} />
                        </div>
                    </div>

                    <p style={{ color: 'white' }}>{`Victim: ${victim} - Monster: ${monster} - Room: ${dictStates.square}`}</p>
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


