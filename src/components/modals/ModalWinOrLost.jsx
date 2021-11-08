import React, { useContext } from 'react'
import "./ModalWichCardAccuse.css";
import { ThemeContext } from '../../context/ContextGeneral';


const ModalWinOrLost = ({ isOpenWinOrLost, closeModalWinOrLost, winner, loser }) => {

    const handleModalContainer = (e) => e.stopPropagation();

    const dictStates = useContext(ThemeContext);

    return (
        <div className={`modal ${isOpenWinOrLost && "is-open"}`} onClick={closeModalWinOrLost}>
            <div className="Modal-container" onClick={handleModalContainer}>
                <button className="modal-close" onClick={closeModalWinOrLost}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" fill="#000" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" fill="#000" />
                    </svg>
                </button>

                {
                    (function () {

                        if (winner) {

                            if (winner === dictStates.nickname) {
                                return <h2>{`You win${winner}`}</h2>
                            }
                            else {
                                return <h2>{`You Lost ${dictStates.nickname}`}</h2>
                            }
                        }

                        if (loser) {

                            if (loser === dictStates.nickname) {
                                return <h2>{`You Lost${loser}`}</h2>
                            }
                            else {
                                return <h2>{`${loser} Lost`}</h2>
                            }
                        }

                    }).call(this)
                }
            </div>
        </div>
    )
};


export default ModalWinOrLost;
