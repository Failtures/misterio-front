// imports
import React, { useContext }from "react"
import { Button } from "@material-ui/core";
import { ThemeContext } from "../../context/ContextGeneral";

const ButtonCreateGame = ({ openModal }) => {

  const dictStates = useContext(ThemeContext)

  const handleModal = () => {
    if (dictStates.nickname === '') {
      alert('introduce nickname')
    } else {
      openModal();
    }
  }
  
  return (
    <div>
      <Button variant="contained" color="secondary" disabled={dictStates.nickname === ''} onClick={handleModal}> Create Game </Button>
    </div>
  );
}

export default ButtonCreateGame;