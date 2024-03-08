import { useLobbyContext } from "@/contexts/LobbyContext/LobbyContext";
import Avatar from "../Avatar/Avatar";
import { getPlayerName } from "@/redux/user/utils";
import { Container } from "./PlayerList.styled";
import { colors } from "@/utils/colors";

const PlayerList = () => {
  const { lobby } = useLobbyContext();
  const player_name = getPlayerName();
  if (lobby?.name === "") {
    return <Avatar name={player_name} />;
  }

  return (
    <Container>
      {lobby?.players.map((player, index) => (
        <Avatar key={index} name={player} color={colors[index]} />
      ))}
    </Container>
  );
};
export default PlayerList;
