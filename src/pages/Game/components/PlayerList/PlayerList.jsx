import { useLobbyContext } from "@/contexts/LobbyContext/LobbyContext";
import { ColorAndPlayerName, Container, Detective, List } from "./PlayerList.styled";
import Text from "@/components/Text/Text";

const PlayerList = () => {
  const { lobby } = useLobbyContext();

  return (
    <Container>
      <Text color="primary" fontWeigth="bold" fontSize="medium">
        Jugadores:
      </Text>
      <List>
        {lobby.player_positions.map((player, index) => (
          <ColorAndPlayerName key={index}>
            <Detective $color={player.color} />
            <Text color="primary" fontWeigth="regular" fontSize="small">
              {player.player_name}
            </Text>
          </ColorAndPlayerName>
        ))}
      </List>
    </Container>
  );
};
export default PlayerList;
