import React from 'react'
import {send_, ws} from '../WebSocket'


function ButtonExitLobby({lobby_name, host, player}) {

    const handleClick = () => {
        if(host) {
            console.log(`soy el host: ${host}`);
            // const takes = {
            //     'action': 'lobby_leave',
            //     'player_name': props.host,
            //     'lobby_name': props.lobby_name
            // }
            // ws.send(JSON.stringify(takes));
            send_(ws, 'lobby_leave', host, lobby_name);          
        }
        else if(player) {
            console.log(`no soy el host, soy el player ${player}`);
            // const takes = {
            //     'action': 'lobby_leave',
            //     'player_name': props.player,
            //     'lobby_name': props.lobby_name
            // }
            // ws.send(JSON.stringify(takes));
            send_(ws, 'lobby_leave', player, lobby_name);
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