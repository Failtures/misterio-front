// imports
import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ContextGeneral'
import { Typography } from '@material-ui/core'
// CSS styles
import '../modals/WinOrLost.css'

const ModalWinOrLost = ({ isOpenWinOrLost, closeModalWinOrLost, winner, loser }) => {

    const dictStates = useContext(ThemeContext)

    const handleModalContainer = (e) => e.stopPropagation()

    return (
        <div className={`modal-win-lost-container ${isOpenWinOrLost && "is-open-win-lost"}`} onClick={closeModalWinOrLost}>
            <div className="modal-win-lost" onClick={handleModalContainer}>
                <button className="modal-close-win-lost" onClick={closeModalWinOrLost}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" fill="#000" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" fill="#000" />
                    </svg>
                </button>

                {
                    (function () {

                        if (winner) {

                            if (winner === dictStates.nickname) {
                                return <Typography variant="h2" color="#fff">{`You win ${winner}`}</Typography>
                            }
                            else {
                                return <Typography variant="h2" color="#fff">{`You Lost ${dictStates.nickname}`}</Typography>
                            }
                        }

                        if (loser) {

                            if (loser === dictStates.nickname) {
                                return <Typography variant="h2" color="#fff">{`You Lost ${loser}`}</Typography>
                            }
                            else {
                                return <Typography variant="h2" color="#fff">{`${loser} Lost`}</Typography>
                            }
                        }

                    }).call(this)
                }
            </div>
        </div>
    )
}

export default ModalWinOrLost
