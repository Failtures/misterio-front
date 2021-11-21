import React, { useContext } from 'react'
import { Button } from "@material-ui/core"
import { ThemeContext } from '../../context/ContextGeneral'
import { Typography } from '@material-ui/core'

const ButtonSuspect = ({ openModal }) => {

    const dictStates = useContext(ThemeContext)

    return (
        <div>
            <Button
                variant="contained"
                color="secondary"
                disabled={((dictStates.square === 'Bedroom' ||
                    dictStates.square === 'Library' ||
                    dictStates.square === 'Cellar' ||
                    dictStates.square === 'Garage' ||
                    dictStates.square === 'Laboratory' ||
                    dictStates.square === 'Pantheon' ||
                    dictStates.square === 'Dining' ||
                    dictStates.square === 'Living') && dictStates.buttonSuspect && (dictStates.turn === dictStates.nickname)) ? false : true}
                onClick={openModal}
            >
                <Typography variant="button" color="#fff">Suspect</Typography>
            </Button>
        </div>
    )
}

export default ButtonSuspect
