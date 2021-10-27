import React, { useState, useRef } from 'react';
import './Home.css';
import { useModal } from '../hooks/useModal'
import { TextField, Button } from '@material-ui/core'
import Modal from './Modal';
import ButtonCreateGame from './Buttons/ButtonCreateGame';
import ListGames from './ListGames';
import ButtonThrowDice from './Buttons/ButtonThrowDice';
import ThrowDice from './Buttons/ButtonThrowDice';
import { color } from '@mui/system';

const Home = () => {

    const [nickName, setNickName] = useState('');
    const [isOpenModal, openModal, closeModal] = useModal(false);

    return (
        <div className="container">
            <h1 style={{color:'white'}}>MISTERY</h1>
            <div className="section">
                <TextField id="outlined-basic" label="Nickname" variant="outlined" onChange={(e) => { setNickName(e.target.value) }} />
                <ButtonCreateGame openModal={openModal} />
                <ListGames player={nickName}></ListGames>
                <Modal isOpen={isOpenModal} closeModal={closeModal} player={nickName} />
            </div>
<<<<<<< HEAD
            
=======
>>>>>>> f5c302d9535565d4ab9b1909e0c01661627a218d
        </div>
    )
}

export default Home;