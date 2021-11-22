// imports
import React, { useState, useContext, useEffect } from 'react'
import { useModal } from '../../hooks/useModal'
import { TextField } from '@material-ui/core'
import { ThemeContext } from '../../context/ContextGeneral'
import { Typography } from '@material-ui/core'
import { ws } from '../WebSocket'

import { Button } from "@material-ui/core"

// components
import ModalCreateGame from '../modals/ModalCreateGame'
import ButtonCreateGame from '../buttons/ButtonCreateGame'
import ListGames from '../ListGames'
import ModalRanking from '../modals/ModalRanking'
// CSS styles
import './Home.css'

const Home = () => {

    const dictStates = useContext(ThemeContext)

    const [isOpenModalCreateGame, openModalCreateGame, closeModalCreateGame] = useModal(false)
    const [isOpenModalRanking, openModalRanking, closeModalRanking] = useModal(false)

    const [touched, setTouched] = useState(false)
    const [errorMessage, setErrorMessage] = useState([''])
    const [ranking, setRanking] = useState([])

    const handleTouchTrue = () => setTouched(true)
    const handleTouchFalse = () => setTouched(false)


    const handleTouch = () => {
        setTouched(!touched)
    }

    useEffect(() => {
        ws.onmessage = (e) => {
            const parsedJson = JSON.parse(e.data)
            console.log(parsedJson)

            if (parsedJson.action === 'top-ten') {
                setRanking(parsedJson.ranking)
            }
        }

    })

    return (
        <div className="container">
            <div className="header">
                <Typography style={{ fontSize: '5rem' }} color="#fff" variant="h1">MYSTERY</Typography>
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
                            inputProps={{ maxLength: 10 }}
                            onFocus={handleTouchTrue}
                            onBlur={handleTouchFalse}
                            helperText={touched && errorMessage[0]}
                            required="true"
                        />

                        <ButtonCreateGame className="create" openModal={openModalCreateGame} />
                        <Button
                       
                            variant="contained"
                            color="secondary"
                            onClick={() => {
                                openModalRanking()
                                const takesRanking = {
                                    'action':'ranking_get_top_ten'
                                }
                                ws.send(JSON.stringify(takesRanking))
                            }}
                        >
                            <Typography variant="button" color="#fff">Ranking</Typography>
                        </Button>
                    </div>
                </div>
            </div>

            <ModalRanking ranking={ranking} isOpenModalRanking={isOpenModalRanking} closeModalRanking={closeModalRanking}></ModalRanking>
            <ModalCreateGame isOpen={isOpenModalCreateGame} closeModal={closeModalCreateGame} />
            <div className="footer">
                <Typography style={{ color: 'white', fontSize: '1rem' }} variant="body1"> &copy;FAILTURES </Typography>
            </div>
        </div >
    )
}

export default Home