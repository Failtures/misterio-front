import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { ws } from "../WebSocket";
import { ThemeContext } from "../../context/ContextGeneral";

const ButtonStartGame = (props) => {

    const dictStates = useContext(ThemeContext)
    // console.log(dictStates);
    return (
        <Button
            variant="contained"
            color="secondary"
            onClick={() => {
                ws.send(JSON.stringify({
                    'action': props.action,
                    'player_name': props.player_name,
                    'lobby_name': dictStates.lobbyName
                }));
            }
            }
        >
            Start
        </Button>
    );
};

export default ButtonStartGame;



// import React, { useEffect } from "react";
// import { Button } from "@material-ui/core";
// import { useHistory } from "react-router";
// import { ws } from "../WebSocket";

// const ButtonStartGame = (props) => {

//     const history = useHistory();

//     useEffect(() => {

//     });

//     return (
//         <Button
//             variant="contained"
//             color="secondary"
//             onClick={() => {
//                 ws.send(JSON.stringify({
//                     'action': props.action,
//                     'player_name': props.player_name,
//                     'lobby_name': props.lobby_name
//                 }));

//                 history.push(`/game/${props.lobby_name}`);
//             }}

//         >
//             Start
//         </Button>
//     );
// };

// export default ButtonStartGame;