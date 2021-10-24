import React, { useState } from 'react';
import './Home.css';
import { useModal } from '../hooks/useModal'
import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Modal from './Modal';
import ButtonCreateGame from './Buttons/ButtonCreateGame';
import ButtonJoinGame from './Buttons/ButtonJoinGame';
import ListGames from './ListGames';
//import Nickname from './Nickname'
import Prueba from './prueba';
import { useHistory } from 'react-router';
import ButtonThrowDice from './Buttons/ButtonThrowDice';
import ThrowDice from './Buttons/ButtonThrowDice';

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

function Home() {
    const history = useHistory()
    const [nickName, setNickName] = useState('');
    const [isOpenModal, openModal, closeModal] = useModal(false);
    const classes = useStyle();
    return (
        <div className="container">
            <div className="section">
                <ButtonCreateGame openModal={openModal} />
                <ButtonThrowDice ThrowDice = {ThrowDice}/>
                <ListGames player={nickName}></ListGames>
                <Modal isOpen={isOpenModal} closeModal={closeModal}>
                    <h1>Create Game</h1>
                    <form>
                        <div className="tfield-group">
                            <TextField id="outlined-basic" label="Nickname" variant="outlined" />
                            <TextField id="outlined-basic" label="Game Name" variant="outlined" />
                        </div>
                        <div className="button-group">
                            <Button variant="contained" className={classes.botonPersonalizado}>Create Game</Button>
                            <Button variant="contained" onClick={closeModal} className={classes.botonPersonalizado}>Exit</Button>
                        </div>
                    </form>
                </Modal>
            </div>
            <TextField id="outlined-basic" label="Nickname" variant="outlined" onChange={(e) => { setNickName(e.target.value) }} />
            <p>{nickName}</p>

            <Button variant="contained" color="secondary" onClick={() => {history.push('/')}}>OPRIMIME</Button>
        </div>
    )
}

export default Home;