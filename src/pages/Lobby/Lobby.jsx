import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import PlayerList from "./components/PlayerList/PlayerList";
import Chat from "@/components/Chat/Chat";
import { Container } from "./Lobby.styled";

const Lobby = () => {
  return (
    <Container>
      <Header />
      <PlayerList />
      <Chat />
      <Menu />
    </Container>
  );
};
export default Lobby;
