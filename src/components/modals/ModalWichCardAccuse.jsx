// import
import React, { useContext, useState } from 'react'
import { ws } from '../WebSocket';
import { Button } from "@material-ui/core";
import { ThemeContext } from '../../context/ContextGeneral';
// CSS styles
import "./ModalWichCardAccuse.css";
import { cardModals } from '../CardFunction'
const ModalWichCardAccuse = ({ isOpen, closeModal }) => {

    const dictStates = useContext(ThemeContext)

    const [victim, setVictim] = useState('');
    const [monster, setMonster] = useState('');
    const [room, setRoom] = useState('');

    const takes = {
        'action': 'match_accuse',
        'match_name': dictStates.lobbyName,
        'monster': monster,
        'victim': victim,
        'room': room
    }

    const handleModalContainer = (e) => e.stopPropagation();

    return (

        <div className={`modal-accuse ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className="modal-container-accuse aside" onClick={handleModalContainer}>
                <button className="modal-close-accuse" onClick={closeModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" fill="#000" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" fill="#000" />
                    </svg>
                </button>

                <div className="card-accuse-container">
                    <h2> Cards to accuse</h2>

                    <div ClassName="victims-accuse">
                        <h3>Victims:</h3>

                        <img width="150px" height="200px" classname= "gardener" src="/gardener.png" alt="Gardener" onClick={(e) => setVictim(e.target.alt)} />
                        <img width="150px" height="200px" src="/maid.png" alt="Maid" onClick={(e) => setVictim(e.target.alt)} />
                        <img width="150px" height="200px" src="/butler.png" alt="Butler" onClick={(e) => setVictim(e.target.alt)} />
                        <img width="150px" height="200px" src="/count.png" alt="Count" onClick={(e) => setVictim(e.target.alt)} />
                        <img width="150px" height="200px" src="/countess.png" alt="Countess" onClick={(e) => setVictim(e.target.alt)} />
                        <img width="150px" height="200px" src="/housekeeper.png" alt="Housekeeper" onClick={(e) => setVictim(e.target.alt)} />
                    </div>

                    <div className="monsters-accuse">
                        <h3>Monsters:</h3>

                        <img width="150px" height="200px" src="/dracula.png" alt="Dracula" onClick={(e) => setMonster(e.target.alt)} />
                        <img width="150px" height="200px" src="/frankenstein.png" alt="Frankenstein" onClick={(e) => setMonster(e.target.alt)} />
                        <img width="150px" height="200px" src="/werewolf.png" alt="Werewolf" onClick={(e) => setMonster(e.target.alt)} />
                        <img width="150px" height="200px" src="/ghost.png" alt="Ghost" onClick={(e) => setMonster(e.target.alt)} />
                        <img width="150px" height="200px" src="/mummy.png" alt="Mummy" onClick={(e) => setMonster(e.target.alt)} />
                        <img width="150px" height="200px" src="/dr.png" alt="Dr. Jekyll and Mr Hyde" onClick={(e) => setMonster(e.target.alt)} />
                    </div>

                    <div className="rooms-accuse">
                        <h3>Rooms:</h3>

                        <img width="150px" height="200px" src="/bedroom.png" alt="Bedroom" onClick={(e) => setRoom(e.target.alt)} />
                        <img width="150px" height="200px" src="/library.png" alt="Library" onClick={(e) => setRoom(e.target.alt)} />
                        <img width="150px" height="200px" src="/cellar.png" alt="Cellar" onClick={(e) => setRoom(e.target.alt)} />
                        <img width="150px" height="200px" src="/garage.png" alt="Garage" onClick={(e) => setRoom(e.target.alt)} />
                        <img width="150px" height="200px" src="/laboratory.png" alt="Laboratory" onClick={(e) => setRoom(e.target.alt)} />
                        <img width="150px" height="200px" src="/pantheon.png" alt="Pantheon" onClick={(e) => setRoom(e.target.alt)} />
                        <img width="150px" height="200px" src="/dining.png" alt="Dining" onClick={(e) => setRoom(e.target.alt)} />
                        <img width="150px" height="200px" src="/living.png" alt="Living" onClick={(e) => setRoom(e.target.alt)} />
                    </div>

                    <div>
                        <p>{`Victim: ${victim} - Monster: ${monster} - Room: ${room}`}</p>
                    </div>

                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => {
                            ws.send(JSON.stringify(takes))
                            closeModal()
                        }}
                    >
                        Confirm Accusation
                    </Button>
                </div>

            </div>
        </div>
    )
};


export default ModalWichCardAccuse;
