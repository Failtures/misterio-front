// imports
import React, { useState, useContext } from 'react'
import { useModal } from '../../hooks/useModal'
import { TextField } from '@material-ui/core'
import { ThemeContext } from '../../context/ContextGeneral'
import { Typography } from '@material-ui/core'

// components
import ModalCreateGame from '../modals/ModalCreateGame'
import ButtonCreateGame from '../buttons/ButtonCreateGame'
import ListGames from '../ListGames'
// CSS styles
import './Home.css'

const Home = () => {

    const dictStates = useContext(ThemeContext)

    const [isOpenModalCreateGame, openModalCreateGame, closeModalCreateGame] = useModal(false)

    const [touched, setTouched] = useState(false)
    const [errorMessage, setErrorMessage] = useState([''])

    const handleTouchTrue = () => setTouched(true)
    const handleTouchFalse = () => setTouched(false)


    const handleTouch = () => {
        setTouched(!touched)
    }

    return (
        <div className="container">
            <div className="header">
            <Typography style={{fontSize:'5rem'}} color="#fff" variant="h1">MYSTERY</Typography>
            </div>
            <div className="section">
                <div className="aside">
                    <ListGames />
                </div>
                <div className="create-conteiner">
                    <div className="create-loggin">

                        <TextField 
                            className="nick" 
                            id="outlined-basic" 
                            label="Nickname" 
                            variant="filled" 
                            onChange={(e) => { dictStates.setNickname(e.target.value) }} 
                            inputProps={{maxLength: 10}}
                            onFocus={handleTouchTrue}
                            onBlur={handleTouchFalse}
                            helperText={touched && errorMessage[0]}
                            required="true"
                        />

                        <ButtonCreateGame className="create" openModal={openModalCreateGame} />
                    </div>
                </div>
            </div>
            <ModalCreateGame isOpen={isOpenModalCreateGame} closeModal={closeModalCreateGame} />
            <div className="footer">
                <Typography style={{color:'white', fontSize:'1rem'}} variant="body1"> &copy;FAILTURES </Typography>
            </div>
        </div>
    )
}

export default Home