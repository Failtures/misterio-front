import React, { useState, useContext } from 'react';
import { ws } from '../WebSocket'
import { TextField } from '@material-ui/core';
import { ThemeContext } from '../../context/ContextGeneral';

import './Chat.css';

const ChatGame = ({ buffer }) => {

    const [msg, setMsg] = useState('');

    const dictStates = useContext(ThemeContext);

    const takesMatchSend = {
        'action': 'chat_match_send',
        'player_name': dictStates.nickname,
        'chat_name': dictStates.lobbyName,
        'message': msg
    };

    return (
        <div className="game-chat-container">

            <div className="game-chat-content">
                {buffer.map(buff => <p style={{ color: 'white' }}>{buff}</p>)}
            </div>



            <TextField
                className="game-chat-input"
                ariant="filled"
                size="small"
                autoFocus={true}
                value={msg}
                onChange={(e) => { setMsg(e.target.value) }}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        ws.send(JSON.stringify(takesMatchSend));
                        setMsg('')
                    }
                }}
            >
            </TextField>

        </div>
    );
};

export default ChatGame;