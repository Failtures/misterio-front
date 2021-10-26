import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";

const ButtonStartGame = () => {

    const history = useHistory()

    return (
        <Button
            variant="contained"
            color="secondary"
            >start
        </Button>
    );
};

export default ButtonStartGame;