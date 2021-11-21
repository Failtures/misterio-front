// imports
import React, { useContext } from 'react'
import { Button } from "@material-ui/core"
import { ThemeContext } from '../../context/ContextGeneral'
import { Typography } from '@material-ui/core'

const ButtonAccuse = ({ openModal }) => {

    const dictStates = useContext(ThemeContext)

    return (
        <div>
            <Button
                variant="contained"
                color="secondary"
                disabled={dictStates.nickname === dictStates.turn ? false : true}
                onClick={openModal}
            >
                <Typography variant="button" color="#fff">Accuse</Typography>
            </Button>
        </div>
    )
}
export default ButtonAccuse