// import
import React, { useState } from 'react'
// components
import ButtonUseSalem from '../buttons/ButtonUseSalem';
// CSS styles
import "./ModalSalem.css"

const MchooseCardsSuspect = ({ isOpenSalem, closeModalSalem }) => {

    const [selection, setSelection] = useState('')

    const handleModalContainer = (e) => e.stopPropagation();

    return (
        
        <div className={`modal-salem ${isOpenSalem && "is-open"}`} onClick={closeModalSalem}>
            <div className="modal-container-salem bcolor aside" onClick={handleModalContainer}>
                <button className="modal-close-salem" onClick={closeModalSalem}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" fill="#000" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" fill="#000" />
                    </svg>
                </button>
                <h2>Select to Suspect</h2>
                <form>
                    <p>Que desesas saber?:</p>
                    <input type="radio" value="MONSTER" name="gender" onClick={(e) => setSelection(e.target.value)} /> Monster
                    <br></br>
                    <input type="radio" value="VICTIM" name="gender" onClick={(e) => setSelection(e.target.value)} /> Victim
                    <br></br>
                    <input type="radio" value="ROOM" name="gender" onClick={(e) => setSelection(e.target.value)} /> Room
                    <ButtonUseSalem selection={selection} />
                </form>
            </div>
        </div>
    )
}

export default MchooseCardsSuspect


