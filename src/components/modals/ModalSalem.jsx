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
        
        <div className={`modal-salem-container ${isOpenSalem && "is-open-salem"}`} onClick={closeModalSalem}>
            <div className="modal-salem" onClick={handleModalContainer}>
                <button className="modal-close-salem" onClick={closeModalSalem}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" fill="#000" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" fill="#000" />
                    </svg>
                </button>
                <div className= "salem-cards-container">
                    <h2>What card do you want to reveale?</h2>
                    <h3> MONSTER </h3>
                    <img width="150px" height="200px" src="/dorso1.png" alt="MONSTER" onClick={(e) => setSelection(e.target.alt)} />
                    <h3> VICTIM </h3>
                    <img width="150px" height="200px" src="/dorso1.png" alt="VICTIM" onClick={(e) => setSelection(e.target.alt)} />
                    <h3> ROOM </h3>
                    <img width="150px" height="200px" src="/dorso1.png" alt="ROOM" onClick={(e) => setSelection(e.target.alt)} />
                    <p style={{ color: 'white' }}>{`Selection: ${selection}`} </p>
                    <ButtonUseSalem selection={selection} />
                </div>
            </div>
        </div>
    )
}

export default MchooseCardsSuspect


