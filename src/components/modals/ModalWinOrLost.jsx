import React from 'react'
import "./ModalWichCardAccuse.css";

const ModalWinOrLost = ({ isOpenWinOrLost, closeModalWinOrLost, winner, loser, msg }) => {

    const handleModalContainer = (e) => e.stopPropagation();

    return (
        <div className={`modal ${isOpenWinOrLost && "is-open"}`} onClick={closeModalWinOrLost}>
            <div className="Modal-container" onClick={handleModalContainer}>
                <button class="modal-close" onClick={closeModalWinOrLost}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" fill="#000" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" fill="#000" />
                    </svg>
                </button>

                {winner && <p>{msg}</p>}

                {loser &&  <p>{msg}</p>}

            </div>
        </div>
    )
};


export default ModalWinOrLost;