import React from 'react'
import { Button } from "@material-ui/core";
//import { ws, send_ } from "../WebSocket"

const ButtonAccuse= ({openModal}) => {
    
    return (
        <div>
            <Button variant="contained" color="secondary" onClick={openModal}> Accuse </Button>
        </div>
    )
}

export default ButtonAccuse;