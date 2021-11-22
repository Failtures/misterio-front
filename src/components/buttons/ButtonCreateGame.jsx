// imports
import React, { useContext } from "react"
import { Button } from "@material-ui/core"
import { ThemeContext } from "../../context/ContextGeneral"
import { Typography } from '@material-ui/core'

const ButtonCreateGame = ({ openModal }) => {

  const dictStates = useContext(ThemeContext)

  const handleModal = () => {
    if (dictStates.nickname === '') {
      alert('introduce nickname')
    } else {
      openModal()
    }
  }

  return (
    <div style={dictStates.nickname === '' ? {display: 'none'} : {display: ''}}>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleModal}
        disabled={dictStates.nickname === ''}
      >
        <Typography color="#fff" variant="button">Create Game</Typography>
      </Button>
    </div>
  )
}

export default ButtonCreateGame