import React, { useState, useRef } from 'react';
import './Home.css';
import { useModal } from '../hooks/useModal'
import { TextField, Button } from '@material-ui/core'
import Modal from './Modal';
import ButtonCreateGame from './Buttons/ButtonCreateGame';
import ListGames from './ListGames';
import ButtonThrowDice from './Buttons/ButtonThrowDice';
import ThrowDice from './Buttons/ButtonThrowDice';

const Home = () => {
    const [nickName, setNickName] = useState('');
    const [isOpenModal, openModal, closeModal] = useModal(false);
    return (
        <div className="container">
            <div className="section">
                <ButtonCreateGame openModal={openModal}/>
                <ListGames player={nickName}></ListGames> 
                <Modal isOpen={isOpenModal} closeModal={closeModal} player={nickName} />
            </div>
            <TextField id="outlined-basic" label="Nickname" variant="outlined" onChange={(e) => { setNickName(e.target.value) }} />
        </div>
    )
}

export default Home;