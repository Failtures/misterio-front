// imports 
import React, { useContext, useRef } from "react"
import { ws } from '../WebSocket'
import { Button } from "@material-ui/core"
import { ThemeContext } from '../../context/ContextGeneral'
import { Typography } from '@material-ui/core'

const ButtonUseSalem = ({ selection }) => {

  const dictStates = useContext(ThemeContext)

  const buttonRef = useRef(null)

  const takesSalem = {
    'action': 'match_use_witch',
    'player_name': dictStates.nickname,
    'match_name': dictStates.lobbyName,
    'card_type': selection
  }

  return (
    <div>
      <Button
        ref={buttonRef}
        variant="contained"
        color="secondary"
        onClick={() => {
          ws.send(JSON.stringify(takesSalem))
          if (selection) { buttonRef.current.disabled = true }
        }}
      >
        <Typography variant="button" color="#fff">Use Salem</Typography>
      </Button>
    </div>
  )
}

export default ButtonUseSalem