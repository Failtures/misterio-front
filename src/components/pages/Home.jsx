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

            <div className="header">
                <h1>MISTERY</h1>
            </div>

            <div className="section">
                <div className="aside">
                    <ListGames player={nickname}></ListGames>
                </div>

                <div className="create-conteiner">
                    <div className="create-loggin">
                        <TextField className="nick" id="outlined-basic" label="Nickname" variant="outlined" onChange={(e) => { setNickName(e.target.value) }} />
                        <ButtonCreateGame className="create" openModal={openModal} />
                    </div>

                </div>

            </div>

            <Modal isOpen={isOpenModal} closeModal={closeModal} player={nickname} />

            <div className="footer">
                <p>FOOTER</p>
            </div>

        </div>
    )
}

export default Home;