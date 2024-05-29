import { useLobbyContext } from "@/contexts/LobbyContext/LobbyContext";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import PlayerList from "./components/PlayerList/PlayerList";
import Chat from "@/components/Chat/Chat";
import { Container } from "./Lobby.styled";

const Lobby = () => {
  const { lobby } = useLobbyContext();
  return (
    <Container>
      {lobby.name && <Header />}
      <PlayerList />

      <Menu />
      {lobby.name && (
        <div style={{ position: "absolute", left: 0, bottom: 0, height: "220px", width: "350px" }}>
          <Chat action="chat_lobby_send" />
        </div>
      )}
    </Container>
  );
};
export default Lobby;
