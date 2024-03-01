import { useLobbyContext } from "@/contexts/LobbyContext/LobbyContext";
import CustomButton from "@/components/CustomButton/CustomButton";
import ModalContainer from "../ModalContainer/ModalContainer";
import Modal from "@/components/Modal/Modal";
import CardSelector from "../CardSelector/CardSelector";
import { cards } from "@/cards";
import { useForm } from "react-hook-form";
import useModal2 from "@/hooks/useModal2";
import { Form } from "./ResponseQuestion.styled";

const ResponseQuestion = () => {
  const { handleSubmit } = useForm();
  const { lobby, dispatch } = useLobbyContext();
  const suspect_response = useModal2();

  const parse_cards = [...cards.monsters, ...cards.victims, ...cards.rooms];

  const getSuspectResponseCard = () => {
    let suspect_response = {};
    if (lobby.suspect_response) {
      suspect_response = parse_cards.find((card) => card.name === lobby.suspect_response);
    }
    return suspect_response;
  };

  const suspect_response_card = getSuspectResponseCard();

  const onSubmit = () => {
    dispatch({ type: "reset_suspect_response" });
  };

  return (
    <Modal isOpen={lobby.suspect_response ? true : false} toggleModal={suspect_response.toggleModal}>
      <ModalContainer
        title="Resultado de sospecha"
        subtitle="Te mostraron la siguiente carta, sera guardada en tu informe."
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <CardSelector cards={[suspect_response_card]} />
          <CustomButton name="Aceptar" style={{ margin: "auto" }} />
        </Form>
      </ModalContainer>
    </Modal>
  );
};
export default ResponseQuestion;
