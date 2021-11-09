// imports
import React from 'react'
import { makeStyles } from '@material-ui/styles'



const PlayerToken = ({ players }) => {

    const useStyles = makeStyles({
        token: {
            width: '50px',
            height: '50px',
            backgroundColor: 'yellow',
            borderRadius: '100%',
            border: '1px solid black'
        }
    })

    const classes = useStyles();

    return (
        <>
            <div className={classes.token} />
            <ul>
                {
                    players.map((item) => (
                        <li>{item}</li>
                    ))
                }

            </ul>
        </>
    )
}

export default PlayerToken
