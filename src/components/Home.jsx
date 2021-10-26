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
            <h1 style={{color:'white'}}>MISTERIO</h1>
            <div className="section">
                <TextField id="outlined-basic" label="Nickname" variant="outlined" onChange={(e) => { setNickName(e.target.value) }} />
                <ButtonCreateGame openModal={openModal} />
                <ListGames player={nickName}></ListGames>
                <Modal isOpen={isOpenModal} closeModal={closeModal} player={nickName} />
                <TextField id="outlined-basic" label="Nickname" variant="outlined" onChange={(e) => { setNickName(e.target.value) }} />
            </div>
<<<<<<< HEAD
            
=======

>>>>>>> 05ee5f02d85ff00967762a1312cbc17586418490
        </div>
    )
}

export default Home;