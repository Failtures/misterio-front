import React from 'react'
import { Button } from "@material-ui/core";

const ButtonSuspect = ({ openModal }) => {
    return (
        <div>
            <Button
                variant="contained"
                color="secondary"
                onClick={openModal}
            >
                SUSPECT
            </Button>
        </div>
    )
}

export default ButtonSuspect
