import { useForm } from "react-hook-form";
import { cards } from "@/cards";
import { useLobbyContext } from "@/contexts/LobbyContext/LobbyContext";
import { getPlayerName } from "@/redux/user/utils";
import Text from "@/components/Text/Text";
import CardSelector from "../CardSelector/CardSelector";
import CustomButtom from "@/components/CustomButton/CustomButton";
import ModalContainer from "../ModalContainer/ModalContainer";
import Modal from "@/components/Modal/Modal";
import useModal2 from "@/hooks/useModal2";
import { SelectorContainer } from "./Suspect.styled";

const Suspect = () => {
  const { lobby, sendMessage } = useLobbyContext();
  const { control, handleSubmit, reset } = useForm();
  const suspect = useModal2();
  const player_name = getPlayerName();

  const onSubmit = (data) => {
    const { monsters, victims } = data;
    const player_index = lobby.player_positions.findIndex((player) => player.player_name === player_name);
    const room = lobby.player_positions[player_index].square;
    console.log("DATA:", data);

    sendMessage({
      action: "match_suspect",
      player_name,
      match_name: lobby.name,
      monster: monsters,
      victim: victims,
      room,
    });
    reset();
  };

  return (
    <Modal name="Sospechar" isOpen={suspect.isOpen} toggleModal={suspect.toggleModal}>
      <ModalContainer title="Sospechar" subtitle="Selecciona una carta de Monstruo y Víctima.">
        <SelectorContainer onSubmit={handleSubmit(onSubmit)}>
          {Object.keys(cards).map((card_type, index) => {
            if (index === 2) return;

            const title = {
              victims: "Víctimas",
              monsters: "Monstruos",
              rooms: "Habitaciones",
            }[card_type];

            return (
              <div key={index}>
                <Text color="primary" fontWeight="bold" fontSize="microSmall">
                  {title}:
                </Text>
                <CardSelector
                  name={card_type}
                  control={control}
                  cards={cards[card_type]}
                  rules={{ required: "Por favor selecciona una carta" }}
                />
              </div>
            );
          })}
          <CustomButtom name="Confirmar" style={{ margin: "auto" }} />;
        </SelectorContainer>
      </ModalContainer>
    </Modal>
  );
};
export default Suspect;
