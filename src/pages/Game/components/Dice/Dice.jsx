import styled from "styled-components";
import { useLobbyContext } from "@/contexts/LobbyContext/LobbyContext";
import Text from "@/components/Text/Text";
import { Dice1Fill, Dice2Fill, Dice3Fill, Dice4Fill, Dice5Fill, Dice6Fill } from "@styled-icons/bootstrap";
import { Container } from "./Dice.styled";

const DiceIcon = styled.div`
  color: #ffffff;
  width: 100px;
  height: 100px;
`;

const DiceRoll = () => {
  const { lobby, sendMessage } = useLobbyContext();

  const diceIcons = [Dice1Fill, Dice2Fill, Dice3Fill, Dice4Fill, Dice5Fill, Dice6Fill];

  const rollDice = () => {
    sendMessage({ action: "match_roll_dice", match_name: lobby?.name });
  };

  return (
    <Container>
      <Text color="primary" fontWeight="regular" fontSize="medium">
        Presiona para lanzar el dado.
      </Text>
      <DiceIcon as={diceIcons[lobby?.dice - 1] || diceIcons[0]} onClick={rollDice} />
    </Container>
  );
};

export default DiceRoll;
