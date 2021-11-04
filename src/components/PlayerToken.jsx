import React from 'react'
import { makeStyles } from '@material-ui/styles'



const PlayerToken = () => {

    const useStyles = makeStyles ({
        token: {
            width:'50px', 
            height:'50px', 
            backgroundColor:'yellow', 
            borderRadius:'100%', 
            border: '1px solid black'
        }
    })

    const classes = useStyles();


    return (
        <div className={classes.token} />        
    )
}

export default PlayerToken

// {width:'50px', height:'50px', backgroundColor:'yellow', borderRadius:'100%', border: '1px solid black'}