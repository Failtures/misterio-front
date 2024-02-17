import Modal from "@/components/Modal/Modal";
import useModal2 from "@/hooks/useModal2";
import Text from "@/components/Text/Text";
import { cards } from "@/cards";
import CardSelector from "../CardSelector/CardSelector";
import { Container } from "./Inform.styled";
import { useLobbyContext } from "@/contexts/LobbyContext/LobbyContext";

const Inform = () => {
  const { lobby } = useLobbyContext();
  const { isOpen, toggleModal } = useModal2();

  const inCollection = (card_name, cards) => {
    return cards?.some(({ name }) => {
      return name === card_name;
    });
  };

  return (
    <Modal name="Ver informe" isOpen={isOpen} toggleModal={toggleModal}>
      <Container>
        <Text color="primary" fontWeight="bold" fontSize="medium">
          Informe
        </Text>
        {Object.keys(cards).map((type, index) => (
          <CardSelector key={index} cards={{ ...cards[type] }} field_name={type} inCollection={inCollection} />
        ))}
      </Container>
    </Modal>
  );
};

export default Inform;
