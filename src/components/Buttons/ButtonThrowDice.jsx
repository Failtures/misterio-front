import React from "react";
import { Button } from "@material-ui/core";
import { ws } from '../WebSocket'

const ButtonThrowDice = (props) => {

  const takes = {
    'action': 'match_roll_dice',
    'match_name': props.matchName
  };

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => { ws.send(JSON.stringify(takes)) }}
      > Throw Dice
      </Button>
    </div>
  );
}


export default ButtonThrowDice;


// import React, { useState, useEffect } from "react";
// import { Button } from "@material-ui/core";
// import { ws } from '../WebSocket'

// const ButtonThrowDice = (props) => {

//   const [dice, setDice] = useState(0);

//   const takes = {
//     'action': 'match_roll_dice',
//     'match_name': props.matchName
//   };

//   useEffect(() => {

//     ws.onmessage = (e) => {

//       const parsedJson = JSON.parse(e.data);
//       console.log(parsedJson.action);

//       if (parsedJson.action === 'roll_dice') {
//         setDice(parsedJson.dice);
//       };

//     };

//   });

//   return (
//     <div>
//       <Button
//         variant="contained"
//         color="secondary"
//         onClick={() => { ws.send(JSON.stringify(takes)) }}
//       > Throw Dice
//       </Button>

//       <p>{dice}</p>
//     </div>
//   );
// }


// export default ButtonThrowDice;