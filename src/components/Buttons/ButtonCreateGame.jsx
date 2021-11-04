import React from "react"
import { Button } from "@material-ui/core";

const ButtonCreateGame = ({ openModal, nickname }) => {

  const handleModal = () => {
    if(nickname === ''){
      alert('introduce nickname')
    }else{
      openModal()
    }
  }
  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleModal}> Create Game </Button>
    </div>
  );
}

export default ButtonCreateGame;