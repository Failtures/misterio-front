import { useLobbyContext } from "@/contexts/LobbyContext/LobbyContext";
import Avatar from "../Avatar/Avatar";
import { getPlayerName } from "@/redux/user/utils";
import { Container } from "./PlayerList.styled";

const PlayerList = () => {
  const { lobby } = useLobbyContext();

  if (lobby?.name === "") {
    const player_name = getPlayerName();
    return <Avatar name={player_name} />;
  }

  return (
    <Container>
      {lobby?.players.map((player, index) => (
        <Avatar key={index} name={player} />
      ))}
    </Container>
  );
};
export default PlayerList;
