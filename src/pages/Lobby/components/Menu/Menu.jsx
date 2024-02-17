import CreateGame from "../CreateGame/CreateGame";
import ListGames from "../ListGames/ListGames";
import Modal from "@/components/Modal/Modal";
import CustomButton from "@/components/CustomButton/CustomButton";
import { useLobbyContext } from "@/contexts/LobbyContext/LobbyContext";
import useModal2 from "@/hooks/useModal2";
import { Container } from "./Menu.styled";
import { getPlayerName } from "@/redux/user/utils";

const Menu = () => {
  const { lobby, sendMessage } = useLobbyContext();
  const create = useModal2();
  const join = useModal2();
  const player_name = getPlayerName();
  const startGame = () => {
    const { name, chat } = lobby;

    sendMessage({
      action: "lobby_start_match",
      player_name,
      lobby_name: name,
      chat,
    });
  };

  return (
    <Container>
      {!lobby?.name && (
        <>
          <Modal name="Crear partida" isOpen={create.isOpen} toggleModal={create.toggleModal}>
            <CreateGame />
          </Modal>
          <Modal name="Unirse" isOpen={join.isOpen} toggleModal={join.toggleModal}>
            <ListGames />
          </Modal>
        </>
      )}
      {lobby?.host === player_name && <CustomButton name="Iniciar partida" onClick={startGame} />}
    </Container>
  );
};
export default Menu;
