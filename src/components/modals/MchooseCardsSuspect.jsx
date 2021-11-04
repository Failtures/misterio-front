import React, { useState, useContext } from 'react'
import { Button } from '@material-ui/core'
import { ws } from '../WebSocket'
import { ThemeContext } from '../../context/ContextGeneral';
import "./MchooseCardsSuspect.css";

const MchooseCardsSuspect = ({ isOpen, closeModal, match_name }) => {

    const { nickname } = useContext(ThemeContext);
    console.log(nickname);
    console.log(match_name);
    const [victim, setVictim] = useState('')
    const [monster, setMonster] = useState('')
    const [room, setRoom] = useState('')

    const takes = {
        'action': 'match_suspect',
        'player_name': nickname,
        'match_name': match_name,
        'monster': monster,
        'victim': victim,
        'room': room
    }

    const handleModalContainer = (e) => e.stopPropagation();
    return (
        <div className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className="modal-container bcolor aside" onClick={handleModalContainer}>
                <button class="modal-close" onClick={closeModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" fill="#000" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" fill="#000" />
                    </svg>
                </button>
                <h2>Select to Suspect</h2>
                <form>
                    <p>Victims:</p>
                    <input type="radio" value="Gardener" name="gender" onClick={(e) => setVictim(e.target.value)} /> Gardener
                    <br></br>
                    <input type="radio" value="Maid" name="gender" onClick={(e) => setVictim(e.target.value)} /> Maid
                    <br></br>
                    <input type="radio" value="Butler" name="gender" onClick={(e) => setVictim(e.target.value)} /> Butler
                    <br></br>
                    <input type="radio" value="Count" name="gender" onClick={(e) => setVictim(e.target.value)} /> Count
                    <br></br>
                    <input type="radio" value="Countess" name="gender" onClick={(e) => setVictim(e.target.value)} /> Countess
                    <br></br>
                    <input type="radio" value="Housekeeper" name="gender" onClick={(e) => setVictim(e.target.value)} /> Housekeeper
                </form>
                <br></br>
                <form>
                    <p>Monsters:</p>
                    <input type="radio" value="Dracula" name="gender" onClick={(e) => setMonster(e.target.value)} /> Dracula
                    <br></br>
                    <input type="radio" value="Frankenstein" name="gender" onClick={(e) => setMonster(e.target.value)} /> Frankenstein
                    <br></br>
                    <input type="radio" value="Werewolf" name="gender" onClick={(e) => setMonster(e.target.value)} /> Werewolf
                    <br></br>
                    <input type="radio" value="Ghost" name="gender" onClick={(e) => setMonster(e.target.value)} /> Ghost
                    <br></br>
                    <input type="radio" value="Mummy" name="gender" onClick={(e) => setMonster(e.target.value)} /> Mummy
                    <br></br>
                    <input type="radio" value="Dr. Jekyll and Mr Hyde" name="gender" onClick={(e) => setMonster(e.target.value)} /> Dr. Jekyll and Mr Hyde
                </form>
                <br></br>
                <form>
                    <p>Rooms:</p>
                    <input type="radio" value="Bedroom" name="gender" onClick={(e) => setRoom(e.target.value)} /> Bedroom
                    <br></br>
                    <input type="radio" value="Library" name="gender" onClick={(e) => setRoom(e.target.value)} /> Library
                    <br></br>
                    <input type="radio" value="Cellar" name="gender" onClick={(e) => setRoom(e.target.value)} /> Cellar
                    <br></br>
                    <input type="radio" value="Garage" name="gender" onClick={(e) => setRoom(e.target.value)} /> Garage
                    <br></br>
                    <input type="radio" value="Laboratory" name="gender" onClick={(e) => setRoom(e.target.value)} /> Laboratory
                    <br></br>
                    <input type="radio" value="Pantheon" name="gender" onClick={(e) => setRoom(e.target.value)} /> Pantheon
                    <br></br>
                    <input type="radio" value="Dining" name="gender" onClick={(e) => setRoom(e.target.value)} /> Dining
                    <br></br>
                    <input type="radio" value="Living" name="gender" onClick={(e) => setRoom(e.target.value)} /> Living
                </form>
                <br></br>
                <p>{`Victim: ${victim} - Monster: ${monster} - Room: ${room}`}</p>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                        ws.send(JSON.stringify(takes));
                        closeModal();
                    }
                    }> Confirm Accusation
                </Button>
            </div>
        </div>

    )
}

export default MchooseCardsSuspect


