import React, { useState} from 'react'
import { Modal, TextField, Button } from '@material-ui/core'
import { ws, send_ } from './WebSocket'
import { makeStyles } from '@material-ui/styles'
import "./Modal.css";

const useStyles = makeStyles ((them) => ({
    WhichCardAccuse: {
        position: "absolute",
        width: 400,
        backgroundColour: "white",
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        pading: theme.spacing(2,4,3) 
    } 

}))


