import React from "react"

const ButtonCreateGame = ({openModal}) => {
  return (
    <div>
      <button onClick = {openModal}> Create Game </button>
    </div>
  );
}
// FIXME onClick of button.
// NOTE Make the conection of the button to the corresponding function
export default ButtonCreateGame