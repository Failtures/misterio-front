import SuspectOrAccuse from "./components/SuspectOrAccuse/SuspectOrAccuse";
import Inform from "./components/Inform/Inform";
import { useLobbyContext } from "../../contexts/LobbyContext/LobbyContext";
import DiceRoll from "./components/Dice/Dice";
import CustomButton from "@/components/CustomButton/CustomButton";
import Board from "./components/Board/Board";
import { Container, PlayersAndInfo, Actions, Buttons } from "./Game.styled";

export const Game = () => {
  const { lobby, sendMessage } = useLobbyContext();
  console.log("LOBBY GAME:", lobby);

  const endTurn = () => {
    sendMessage({ action: "match_end_turn", match_name: lobby.name });
  };

  return (
    <Container>
      {/*       <PlayersAndInfo /> */}

      <Board />

      {/*    <Actions>
        <DiceRoll />
        <Buttons>
          <CustomButton name="Terminar turno" onClick={endTurn} />
          <SuspectOrAccuse />
          <Inform />
        </Buttons>
      </Actions> */}
    </Container>
  );
};
