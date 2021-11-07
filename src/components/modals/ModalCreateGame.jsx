import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router";
import { TextField, Button } from '@material-ui/core'
import { ws, send_ } from '../WebSocket'
import { makeStyles } from '@material-ui/styles'
import "./ModalCreateGame.css";

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
});

const ModalCreateGame = ({ isOpen, closeModal, player }) => {

    const history = useHistory();
    const [gameName, setGameName] = useState('');

    const handleCreateGame = () => {
        if(gameName === ''){
            alert('introduce game name')
        }else{
            send_(ws, 'lobby_create', player, gameName);
            history.push(`/lobby/${gameName}`);
        }
    }


    const handleModalContainer = (e) => e.stopPropagation();
    const classes = useStyle();
    return (
        <div className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className="modal-container" onClick={handleModalContainer}>
                <button className="modal-close" onClick={closeModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" fill="#000" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" fill="#000" />
                    </svg>
                </button>
                <h2>Create Game</h2>
                <form>
                    <div className="tfield-group">
                        <TextField id="outlined-basic" label="Game Name" variant="outlined" onChange={(e) => { setGameName(e.target.value) }} />
                    </div>
                    <div className="button-group">
                        <Button variant="contained" className={classes.botonPersonalizado} onClick={() => {
                            handleCreateGame()
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
};

export default ModalCreateGame;