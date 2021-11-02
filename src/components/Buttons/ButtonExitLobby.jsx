import React, { useContext } from 'react'
import { ws } from '../WebSocket'
import { ThemeContext } from '../context/ContextGeneral';


function ButtonExitLobby(props) {

    const { nickname } = useContext(ThemeContext);

    const takes = {
        'action': 'lobby_leave',
        'player_name': nickname,
        'lobby_name': props.lobby_name
    };

    return (
        <button onClick={() => {
            console.log(props.lobby_name)
            ws.send(JSON.stringify(takes));
            console.log(nickname);
        }}>
            Exit
        </button>
    );
};

export default ButtonExitLobby;
