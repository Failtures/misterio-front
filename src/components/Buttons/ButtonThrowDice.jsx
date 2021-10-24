import React, { useState } from "react"
import { Button } from "@material-ui/core";

const ButtonThrowDice = ({ TrowDice }) => {
  //const [dice, setDice] = useState('');
  const ThrowDice = () => {
    const min = 1;
    const max = 7;
    const result = Math.floor(Math.random() * (max - min)) + min
    return result;
  }
  return (
    <div>
      <Button variant="contained" color="secondary" onClick={alert(`Numero: ${ThrowDice()}`)}> Throw Dice </Button>
    </div>
  );
}


export default ButtonThrowDice