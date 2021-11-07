import React, { useContext } from 'react';
import './Home.css';
import { useModal } from '../../hooks/useModal'
import { TextField } from '@material-ui/core'
import ModalCreateGame from '../modals/ModalCreateGame';
import ButtonCreateGame from '../buttons/ButtonCreateGame';
import ListGames from '../ListGames';

import { ThemeContext } from '../../context/ContextGeneral';

const Home = () => {

    const dictStates = useContext(ThemeContext)
    const [isOpenModalCreateGame, openModalCreateGame, closeModalCreateGame] = useModal(false);

    return (
        <div className="container">
            <div className="header">
                <h1>MISTERY</h1>
            </div>
            <div className="section">
                <div className="aside">
                    <ListGames />
                </div>
                <div className="create-conteiner">
                    <div className="create-loggin">
                        <TextField className="nick" id="outlined-basic" label="Nickname" variant="outlined" onChange={(e) => { dictStates.setNickname(e.target.value) }} />
                        <ButtonCreateGame className="create" openModal={openModalCreateGame} />
                    </div>
                </div>
            </div>
            <ModalCreateGame isOpen={isOpenModalCreateGame} closeModal={closeModalCreateGame} />
            <div className="footer">
                <p>FOOTER</p>
            </div>

        </div>
    )
}

export default Home;