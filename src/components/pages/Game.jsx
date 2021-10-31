import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ButtonThrowDice from "../Buttons/ButtonThrowDice";
import ButtonEndTurn from "../Buttons/ButtonEndTurn";
import { ws } from '../WebSocket'

const Game = () => {

    const params = useParams();
    const [dice, setDice] = useState(0);
    const match_name = params.game;

    useEffect(() => {

        ws.onmessage = (e) => {

            const parsedJson = JSON.parse(e.data);

            if (parsedJson.action === 'roll_dice') {
                setDice(parsedJson.dice);
            }
            else if(parsedJson.action === 'turn_passed'){
                console.log(parsedJson);
            }
        };
    });

    return (

        <div>
            <h1>Game</h1>

            <ButtonThrowDice matchName={match_name} >

            </ButtonThrowDice>
            <ButtonEndTurn matchName = {match_name}/>
            {dice}

        </div>
    );
};

export default Game;


// import React from "react";
// import { useParams } from "react-router-dom";
// import ButtonThrowDice from "../Buttons/ButtonThrowDice";
// import ButtonEndTurn from "../Buttons/ButtonEndTurn";


// const Game = () => {

//     const params = useParams();

//     const match_name = params.game;

//     return (

//         <div>
//             <h1>Game</h1>

//             <ButtonThrowDice matchName = {match_name}>
//             </ButtonThrowDice>
//             <ButtonEndTurn matchName = {match_name}/>

//         </div>
//     );
// };

// export default Game;


// import React from "react";
// import { useParams } from "react-router-dom";
// import ButtonEndTurn from "../Buttons/ButtonEndTurn";
// import ButtonThrowDice from "../Buttons/ButtonThrowDice";


// const Game = () => {

//     const params = useParams();

//     const match_name = params.game;

//     return (

//         <div>
//             <h1>Game</h1>

//             <ButtonThrowDice matchName = {match_name}/>
//             <ButtonEndTurn matchName = {match_name}/>

//         </div>
//     );
// };

// export default Game;