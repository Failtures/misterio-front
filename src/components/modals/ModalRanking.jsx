// import
import React from 'react'

import { Typography } from '@material-ui/core'
// components

// CSS styles
import "./ModalRanking.css"

const ModalRanking = ({ isOpenModalRanking, closeModalRanking, ranking }) => {


    const handleModalContainer = (e) => e.stopPropagation()

    return (

        <div className={`modal-ranking-container ${isOpenModalRanking && "is-open-ranking"}`} onClick={closeModalRanking}>
            <div className="modal-ranking" onClick={handleModalContainer}>
                <button className="modal-close-ranking" onClick={closeModalRanking}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" fill="#000" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" fill="#000" />
                    </svg>
                </button>

                <Typography variant="h4" color="black">Ranking</Typography>
                <div className="ranking-container">
                    <div className="ranking-head">
                        <Typography variant="h5" color="black">Player</Typography>
                        <Typography variant="h5" color="black">Victories</Typography>
                    </div>

                    {
                        ranking.map(player => (
                            <div className="ranking-players">
                                <Typography variant="body1" color="black">{player.player}</Typography>
                                <Typography style={{marginRight: '11%'}} variant="body1" color="black">{player.victories}</Typography>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default ModalRanking


