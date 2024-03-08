import { useLobbyContext } from "@/contexts/LobbyContext/LobbyContext";
import { getPlayerName } from "@/redux/user/utils";
import CustomButton from "@/components/CustomButton/CustomButton";
import ModalContainer from "../ModalContainer/ModalContainer";
import Modal from "@/components/Modal/Modal";
import CardSelector from "../CardSelector/CardSelector";
import { cards } from "@/cards";
import { useForm } from "react-hook-form";
import useModal2 from "@/hooks/useModal2";
import { Form } from "./Question.styled";

const Question = () => {
  const { control, handleSubmit, setError } = useForm();
  const { lobby, sendMessage, dispatch } = useLobbyContext();
  const question = useModal2();
  const player_name = getPlayerName();

  const renderCards = () => {
    const parseCards = [...cards.monsters, ...cards.victims, ...cards.rooms];

    const renderedCards = parseCards.filter(
      (card) =>
        card.name === lobby?.question?.monster ||
        card.name === lobby?.question?.victim ||
        card.name === lobby?.question?.room
    );

    return renderedCards;
  };

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

  const onSubmit = (data) => {
    const { reply_card } = data;

    const suspect_cards = getSuspectCards();
    let takes = {
      action: "match_question_res",
      response: "",
      player_name,
      reply_to: lobby.question.reply_to,
      match_name: lobby.name,
      reply_card: "",
    };

    if (suspect_cards.length > 0) {
      if (!suspect_cards.some((card) => card.name === reply_card)) {
        setError("reply_card", {
          type: "manual",
          message: "La carta seleccionada no está en tu mano.",
        });
        return;
      }
      takes = { ...takes, response: "affirmative", reply_card };
    } else {
      takes = {
        ...takes,
        response: "negative",
        monster: lobby?.question?.monster,
        victim: lobby?.question?.victim,
        room: lobby?.question?.room,
      };
    }

    sendMessage(takes);
    dispatch({ type: "reset_question" });
  };

  return (
    <Modal isOpen={lobby.question ? true : false} toggleModal={question.toggleModal}>
      <ModalContainer
        title="Muestra una carta"
        subtitle="Posses una de las siguientes cartas? Si es asi, por favor selecciona una, caso contrario, presiona en CONFIRMAR."
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <CardSelector
            name="reply_card"
            control={control}
            cards={renderCards()}
            rules={getSuspectCards().length > 0 ? { required: "Por favor selecciona una carta" } : {}}
          />
          <CustomButton name="Confirmar" style={{ margin: "auto" }} />
        </Form>
      </ModalContainer>
    </Modal>
  );
};

export default Question;
