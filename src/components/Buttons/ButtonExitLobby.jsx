import React, {useContext} from 'react'
import { ws } from '../WebSocket'
import { ThemeContext } from '../context/ContextGeneral';


function ButtonExitLobby(props) {

    //{'action': 'lobby_leave', 'player_name': PLAYER_NAME, 'lobby_name' = LOBBY_NAME}
    //Si se va un jugador cualquiera devuelve: {'action': 'player_left', 'player_name': player}

    const { nickname } = useContext(ThemeContext)

    const takes = {
        'action': 'lobby_leave',
        'player_name': nickname,
        'lobby_name': props.lobby_name
    };

    return (

        <button onClick={() => { ws.send(JSON.stringify(takes)) }}>
            Exit
        </button>

    );
};

export default ButtonExitLobby;
