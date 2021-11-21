// imports
import React, { useContext } from "react"
import { Button } from "@material-ui/core"
import { ws } from '../WebSocket'
import { ThemeContext } from "../../context/ContextGeneral"
import { Typography } from '@material-ui/core'

const ButtonThrowDice = (props) => {

  const dictStates = useContext(ThemeContext)

  const takes = {
    'action': 'match_roll_dice',
    'match_name': dictStates.lobbyName
  }

  return (
    <div style={dictStates.nickname === dictStates.turn ? {display: ''} : {display: 'none'}}>
      <Button
        variant="contained"
        color="secondary"
        // disabled={dictStates.nickname === dictStates.turn ? false : true}
        onClick={() => {
          ws.send(JSON.stringify(takes))

        }}
      >
        <Typography variant="button" color="#fff">Throw Dice</Typography>
      </Button>
    </div>
  )
}

export default ButtonThrowDice