import React, { useContext } from 'react';
import './Home.css';
import { useModal } from '../../hooks/useModal'
import { TextField } from '@material-ui/core'
import Modal from '../Modal';
import ButtonCreateGame from '../Buttons/ButtonCreateGame';
import ListGames from '../ListGames';

import { ThemeContext } from '../context/ContextGeneral';

const Home = () => {

    const {nickname, setNickName} = useContext(ThemeContext)
    const [isOpenModal, openModal, closeModal] = useModal(false);

    return (
        <div className="container">
            <h1 style={{color:'white'}}>MISTERY</h1>
            <div className="section">
                <TextField id="outlined-basic" label="Nickname" variant="outlined" onChange={(e) => { setNickName(e.target.value) }} />
                <ButtonCreateGame openModal={openModal} nickname={nickname}/>
                <ListGames player={nickname}></ListGames>
                <Modal isOpen={isOpenModal} closeModal={closeModal} player={nickname} />
            </div>

            <p>{nickname}</p>
        </div>
    )
}

export default Home;