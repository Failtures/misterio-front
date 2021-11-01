import React from 'react'
import {send_, ws} from '../WebSocket'


function ButtonExitLobby(props) {

    const handleClick = () => {
        if(props.host) {
            console.log(`soy el host: ${props.host}`);
            const takes = {
                'action': 'lobby_leave',
                'player_name': props.host,
                'lobby_name': props.lobby_name
            }
            ws.send(JSON.stringify(takes));
            // send_(ws, 'lobby_leave', props.host, props.lobby_name);          
        }
        else if(props.player) {
            console.log(`no soy el host, soy el player ${props.player}`);
            const takes = {
                'action': 'lobby_leave',
                'player_name': props.player,
                'lobby_name': props.lobby_name
            }
            ws.send(JSON.stringify(takes));
            // send_(ws, 'lobby_leave', props.player, props.lobby_name);
        }
    }

    return (
        <>
            <button onClick={ handleClick }>
                Exit
            </button>
        </>
    )
}

export default ButtonExitLobby



// const takes = {
//     'action': 'lobby_leave',
//     'player_name': props.player,
//     'lobby_name': props.lobby_name
// }


//   ws.send_(JSON.stringify(takes))