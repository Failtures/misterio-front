import Inform from "./components/Inform/Inform";
import DiceRoll from "./components/Dice/Dice";
import CustomButton from "@/components/CustomButton/CustomButton";
import Board from "./components/Board/Board";
import PlayerList from "./components/PlayerList/PlayerList";
import Text from "@/components/Text/Text";
import Accuse from "./components/Accuse/Accuse";
import ResponseQuestion from "./components/ResponseQuestion/ResponseQuestion";
import Question from "./components/Question/Question";
import Suspect from "./components/Suspect/Suspect";
import { useLobbyContext } from "../../contexts/LobbyContext/LobbyContext";
import { getPlayerName } from "@/redux/user/utils";
import { Container, PlayersAndInfo, Actions, Buttons } from "./Game.styled";
import { useEffect, useState } from "react";

export const Game = () => {
  const { lobby, sendMessage } = useLobbyContext();
  const player_name = getPlayerName();
  const [room, setRoom] = useState(null);
  const [isMeTurn, setIsMeTurn] = useState(null);

  useEffect(() => {
    const player_index = lobby.player_positions.findIndex((player) => player.player_name === player_name);
    const room = lobby.player_positions[player_index].square;
    setRoom(room);
  }, [lobby, player_name]);

  useEffect(() => {
    setIsMeTurn(player_name === lobby.turn);
  }, [lobby]);

  const endTurn = () => {
    sendMessage({ action: "match_end_turn", match_name: lobby.name });
  };

  return (
    <Container>
      <PlayersAndInfo>
        <PlayerList />
        <Text color="primary" fontWeight="regular" fontSize="small">
          Turn: {lobby?.turn}
        </Text>
      </PlayersAndInfo>

      <Board />

      <Actions>
        {isMeTurn && <DiceRoll />}
        <Buttons>
          {isMeTurn && (
            <>
              <CustomButton name="Terminar turno" onClick={endTurn} />
              <Accuse />
              {room !== "Regular" && <Suspect />}
            </>
          )}
          <Question />
          <Inform />
          <ResponseQuestion />
        </Buttons>
      </Actions>
    </Container>
  );
};
