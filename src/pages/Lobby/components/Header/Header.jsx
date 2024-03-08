import { Container, ArrowBack } from "./Header.styled";
import Text from "@/components/Text/Text";
import { useLobbyContext } from "@/contexts/LobbyContext/LobbyContext";
import { useNavigate } from "react-router-dom";
import { getPlayerName } from "@/redux/user/utils";

const Header = () => {
  const { lobby, dispatch, sendMessage } = useLobbyContext();
  const player_name = getPlayerName();
  const navigate = useNavigate();

  const leave = () => {
    const takes = {
      action: "lobby_leave",
      player_name,
      lobby_name: lobby.name,
    };

    sendMessage(takes);
    dispatch({ type: "reset_lobby" });
    navigate(-1);
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
