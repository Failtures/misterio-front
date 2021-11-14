import React, { useState, useContext } from 'react';
import { ws } from '../WebSocket'
import { TextField } from '@material-ui/core';
import { ThemeContext } from '../../context/ContextGeneral';

const Chat = () => {


    //{'action': 'chat_lobby_send', 'player_name': <str>, 'chat_name': <str>, 'message': <str>}
    const [msg, setMsg] = useState('');

    const dictStates = useContext(ThemeContext);

    const takesLobbySend = {
        'action': 'chat_lobby_send',
        'player_name': dictStates.nickname,
        'chat_name': '',
        'message': ''
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '22%', height: '20%', backgroundColor: 'white', padding: '0.1%', borderRadius: '1%' }}>

            <div style={{ width: '100%', height: '80%', border: '1px solid #ccc' }}></div>

            <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '20%' }}>
                <TextField ariant="filled"
                    size="small"
                    autoFocus={true}
                    style={{ width: '100%' }}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            ws.send(JSON.stringify())
                        }
                    }}
                >
                </TextField>
            </div>
        </div>
    );
};

export default Chat;