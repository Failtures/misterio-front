// import
import React, { useState } from 'react'
// components
import ButtonUseSalem from '../buttons/ButtonUseSalem'
import { Typography } from '@material-ui/core'
// CSS styles
import "./ModalSalem.css"

const MchooseCardsSuspect = ({ isOpenSalem, closeModalSalem }) => {

    const [selection, setSelection] = useState('')

    const handleModalContainer = (e) => e.stopPropagation()

    return (

        <div className={`modal-salem-container ${isOpenSalem && "is-open-salem"}`} onClick={closeModalSalem}>
            <div className="modal-salem" onClick={handleModalContainer}>
                <button className="modal-close-salem" onClick={closeModalSalem}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" fill="#000" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" fill="#000" />
                    </svg>
                </button>
                <div className="salem-cards-container">

                    <Typography variant="h2" color="#fff">What card do you want to reveale?</Typography>

                    <div className="card-select">
                        <div className="salem-monster">

                            <img width="150px" height="200px" src="/dorso1.png" alt="MONSTER" onClick={(e) => setSelection(e.target.alt)} />
                            <Typography style={{ marginTop: '10px' }} variant="h5" color="#fff">Monster</Typography>
                        </div>


                        <div className="salem-victim">

                            <img width="150px" height="200px" src="/dorso1.png" alt="VICTIM" onClick={(e) => setSelection(e.target.alt)} />
                            <Typography style={{ marginTop: '10px' }} variant="h5" color="#fff">Victim</Typography>
                        </div>

                        <div className="salem-room">

                            <img width="150px" height="200px" src="/dorso1.png" alt="ROOM" onClick={(e) => setSelection(e.target.alt)} />
                            <Typography style={{ marginTop: '10px' }} variant="h5" color="#fff">Room</Typography>
                        </div>
                    </div>

                    <Typography variant="body1" color="#fff">{`Selection: ${selection}`}</Typography>


                    <ButtonUseSalem selection={selection} />
                </div>
            </div>
        </div>
    )
}

export default MchooseCardsSuspect


