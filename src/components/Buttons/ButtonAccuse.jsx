import React from 'react'
import { Button } from "@material-ui/core";

const ButtonAccuse= ({openModal, props}) => {
    
    return (
        <div>
            <Button 
                variant="contained"
                color="secondary"
                onClick={openModal}                
            >
                Accuse
            </Button>
        </div>
    )
}

export default ButtonAccuse;