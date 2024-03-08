import { useForm } from "react-hook-form";
import Text from "@/components/Text/Text";
import CardSelector from "../CardSelector/CardSelector";
import CustomButton from "@/components/CustomButton/CustomButton";
import ModalContainer from "../ModalContainer/ModalContainer";
import { useLobbyContext } from "@/contexts/LobbyContext/LobbyContext";
import { cards } from "@/cards";
import { SelectorContainer } from "./Accuse.styled";
import Modal from "@/components/Modal/Modal";
import useModal2 from "@/hooks/useModal2";

const Accuse = () => {
  const { lobby, sendMessage } = useLobbyContext();
  const { control, handleSubmit } = useForm();
  const accuse = useModal2();

  const onSubmit = (data) => {
    const { monsters, victims, rooms } = data;
    sendMessage({
      action: "match_accuse",
      match_name: lobby.name,
      monster: monsters,
      victim: victims,
      room: rooms,
    });
  };

  return (
    <Modal name="Acusar" isOpen={accuse.isOpen} toggleModal={accuse.toggleModal}>
      <ModalContainer title="Acusar" subtitle="Selecciona una carta de cada tipo.">
        <SelectorContainer onSubmit={handleSubmit(onSubmit)}>
          {Object.keys(cards).map((card_type, index) => {
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
          <CustomButton name="Confirmar" style={{ margin: "auto" }} />
        </SelectorContainer>
      </ModalContainer>
    </Modal>
  );
};
export default Accuse;
