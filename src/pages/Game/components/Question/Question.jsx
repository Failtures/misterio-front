import { useLobbyContext } from "@/contexts/LobbyContext/LobbyContext";
import { getPlayerName } from "@/redux/user/utils";
import CustomButton from "@/components/CustomButton/CustomButton";
import ModalContainer from "../ModalContainer/ModalContainer";
import Modal from "@/components/Modal/Modal";
import CardSelector from "../CardSelector/CardSelector";
import { Form } from "./Question.styled";
import { cards } from "@/cards";
import { useForm } from "react-hook-form";
import useModal2 from "@/hooks/useModal2";

const Question = () => {
  const { control, handleSubmit } = useForm();
  const { lobby, sendMessage, dispatch } = useLobbyContext();
  const question = useModal2();
  const player_name = getPlayerName();

  const parse_cards = [...cards.monsters, ...cards.victims, ...cards.rooms];

  const getSuspectCards = () => {
    let suspect_cards = [];
    if (lobby.question) {
      suspect_cards = lobby.hand.filter(
        (card) =>
          card.name === lobby.question?.monster ||
          card.name === lobby.question?.victim ||
          card.name === lobby.question?.room
      );
    }
    return suspect_cards;
  };

  const suspect_cards = getSuspectCards();
  const filterSuspectCards = (suspect_cards, parse_cards) =>
    suspect_cards.map((suspectCard) => parse_cards.find((parseCard) => parseCard.name === suspectCard.name));
  const filteredSuspectCards = filterSuspectCards(suspect_cards, parse_cards);

  const onSubmit = (data) => {
    const { reply_card } = data;

    sendMessage({
      action: "match_question_res",
      response: "affirmative",
      player_name,
      reply_to: lobby.question.reply_to,
      match_name: lobby.name,
      reply_card,
    });
    dispatch({ type: "reset_question" });
  };

  return (
    <Modal isOpen={lobby.question ? true : false} toggleModal={question.toggleModal}>
      <ModalContainer title="Respuesta a sospecha" subtitle="Selecciona una carta a mostrar.">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <CardSelector
            name="reply_card"
            control={control}
            cards={filteredSuspectCards}
            rules={{ required: "Por favor selecciona una carta" }}
          />
          <CustomButton name="Confirmar" style={{ margin: "auto" }} />
        </Form>
      </ModalContainer>
    </Modal>
  );
};

export default Question;
