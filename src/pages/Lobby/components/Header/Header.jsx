import { Container, ArrowBack } from "./Header.styled";
import Text from "@/components/Text/Text";
import { useLobbyContext } from "@/contexts/LobbyContext/LobbyContext";

import { getPlayerName } from "@/redux/user/utils";

const Header = () => {
  const { lobby, sendMessage } = useLobbyContext();
  const player_name = getPlayerName();

  const leave = () => {
    const takes = {
      action: "lobby_leave",
      player_name,
      lobby_name: lobby.name,
    };

    sendMessage(takes);
  };

  return (
    <Container>
      <ArrowBack onClick={leave} />
      <Text color="primary" fontWeight="bold" fontSize="big">
        {lobby?.name}
      </Text>
    </Container>
  );
};
export default Header;
