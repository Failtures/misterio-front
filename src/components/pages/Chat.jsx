import React, { useState, useContext } from 'react'
import { ws } from '../WebSocket'
import { TextField } from '@material-ui/core'
import { ThemeContext } from '../../context/ContextGeneral'
import { Typography } from '@material-ui/core'
import './Chat.css'

const Chat = ({ buffer }) => {

    const [msg, setMsg] = useState('')

    const dictStates = useContext(ThemeContext)

    const takesLobbySend = {
        'action': 'chat_lobby_send',
        'player_name': dictStates.nickname,
        'chat_name': dictStates.lobbyName,
        'message': msg
    }
    
    return (
        <div className="chat-container">

            <div className="chat-content">
                {buffer.map(buff => <Typography variant="body1" color="#fff">{buff}</Typography>)}
            </div>


            <div className="chat-container-input">
                <TextField
                    className="chat-input"
                    ariant="filled"
                    size="small"
                    autoFocus={true}
                    value={msg}
                    onChange={(e) => { setMsg(e.target.value) }}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            ws.send(JSON.stringify(takesLobbySend))
                            setMsg('')
                        }
                    }}
                >
                </TextField>
            </div>
        </div>
    )
}

export default Chat