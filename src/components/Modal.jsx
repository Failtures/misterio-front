import React, { useState, useEffect, useRef } from 'react'

import "./Modal.css";
import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import api from '../configs/api'
import { ws } from '../index'
import { useHistory } from "react-router";

const useStyle = makeStyles({
    botonPersonalizado: {
        background: 'linear-gradient(45deg, #9d3a3a 30%, #812f2f 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    }
})

const Modal = ({ children, isOpen, closeModal, player }) => {

    const [button, setbutton] = useState(false)
    const history = useHistory()
    const [info, setInfo] = useState({})
    const [gameName, setGameName] = useState('');


    const takes = {
        'action': 'lobby_create',
        'player_name': player,
        'lobby_name': gameName
    }


    useEffect(() => {


        ws.onmessage = (e) => {
            const parseJson = JSON.parse(e.data)
            if (parseJson.action === 'new_lobby') {
                setInfo(parseJson);
                history.push(`/Lobby/${gameName}`)
            }
        };

    });


    const handleModalContainer = (e) => e.stopPropagation();
    const classes = useStyle();
    return (
        <div className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className="modal-container" onClick={handleModalContainer}>
                <button class="modal-close" onClick={closeModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" fill="#000" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" fill="#000" />
                    </svg>
                </button>
                <h1>Create Game</h1>
                <form>
                    <div className="tfield-group">
                        <TextField id="outlined-basic" label="Game Name" variant="outlined" onChange={(e) => { setGameName(e.target.value) }} />
                    </div>
                    <div className="button-group">
                        <Button variant="contained" className={classes.botonPersonalizado} onClick={() => {
                            ws.send(JSON.stringify(takes))
                        }}
                        >
                            Create Game
                        </Button>
                        <Button variant="contained" onClick={closeModal} className={classes.botonPersonalizado}>Exit</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal
