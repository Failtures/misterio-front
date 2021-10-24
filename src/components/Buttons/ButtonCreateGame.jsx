import React from "react"
import {Button} from "@material-ui/core";




const ButtonCreateGame = ({openModal}) => {
  return (
    <div>
      <Button variant = "contained" color = "secondary" onClick = {openModal}> Create Game </Button>
    </div>
  );
}

export default ButtonCreateGame