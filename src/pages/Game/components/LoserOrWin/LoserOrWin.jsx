import { useLobbyContext } from "@/contexts/LobbyContext/LobbyContext";
import { getPlayerName } from "@/redux/user/utils";
import CustomButton from "@/components/CustomButton/CustomButton";
import ModalContainer from "../ModalContainer/ModalContainer";
import Modal from "@/components/Modal/Modal";
import { useNavigate } from "react-router-dom";
import useModal2 from "@/hooks/useModal2";

const ModalContent = ({ title, subtitle, button, onClick }) => (
  <ModalContainer title={title} subtitle={subtitle}>
    <CustomButton name={button} style={{ margin: "auto" }} onClick={onClick} />
  </ModalContainer>
);

const LoserOrWin = () => {
  const { lobby, dispatch } = useLobbyContext();
  const loserOrWin = useModal2();
  const playerName = getPlayerName();
  const navigate = useNavigate();

  const onSubmit = () => {
    if (lobby.winner) {
      navigate("/lobby");
      return;
    }
    dispatch({ type: "reset_loser" });
  };

  let message = "";
  let title = "";
  let button = "Ok";

  if (lobby?.loser) {
    const loser = lobby.loser === playerName;
    message = loser
      ? "Has perdido la partida, pero aún debes responder por tus cartas."
      : `El jugador ${lobby.loser} ha perdido la partida, pero aún puedes hacerle preguntas.`;
    title = "Derrota";
  }

  if (lobby?.winner) {
    const winner = lobby.winner === playerName;
    message = winner ? "¡Felicidades! Has ganado la partida." : `El jugador ${lobby.winner} ha ganado la partida.`;
    title = "Partida finalizada";
    button = "Salir";
  }

  return (
    <Modal isOpen={lobby.loser || lobby.winner} toggleModal={loserOrWin.toggleModal}>
      <ModalContent title={title} subtitle={message} button={button} onClick={onSubmit} />
    </Modal>
  );
};
export default LoserOrWin;
