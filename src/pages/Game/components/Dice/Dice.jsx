import { useState, useEffect } from "react";
import { Container } from "./Dice.styled";
import CustomButton from "@/components/CustomButton/CustomButton";
import { useLobbyContext } from "@/contexts/LobbyContext/LobbyContext";
import Text from "@/components/Text/Text";

const DiceRoll = () => {
  const { lobby, sendMessage } = useLobbyContext();

  const rollDice = () => {
    sendMessage({ action: "match_roll_dice", match_name: lobby?.name });
  };

  return (
    <Container>
      <Text color="primary" fontWeight="bold" fontSize="medium">
        {lobby?.dice}
      </Text>
      <CustomButton name="Lanzar dado" onClick={rollDice} />
    </Container>
  );
};

export default DiceRoll;
