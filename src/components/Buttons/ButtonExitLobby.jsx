import React, { useContext } from 'react'
import { ws } from '../WebSocket'
import { ThemeContext } from '../context/ContextGeneral';
import { useHistory } from "react-router";

function ButtonExitLobby(props) {


    const history = useHistory()
    const { nickname } = useContext(ThemeContext);

    const takes = {
        'action': 'lobby_leave',
        'player_name': nickname,
        'lobby_name': props.lobby_name
    };

    return (
        <button onClick={() => {
            ws.send(JSON.stringify(takes));
            history.push('/');
            console.log('onClick')
        }}>
            Exit
        </button>
    );
};

export default ButtonExitLobby;
