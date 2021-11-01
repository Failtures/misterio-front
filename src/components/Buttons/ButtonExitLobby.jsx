import React from 'react'
import {send_, ws} from '../WebSocket'



function ButtonExitLobby(props) {

    // const handleClick = () => {
    //     if(props.host) {
    //         console.log(`soy el host: ${props.host}`);
    //     }
    //     else if(props.player) {
    //         console.log(`no soy el host, soy el player ${props.player}`);
    //     }
    // }

    const imprimir = () => {
        console.log(`host ${props.host}`)
        console.log(`player ${props.player}`)
    }

    return (
        <>
            <button onClick={ imprimir }>
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