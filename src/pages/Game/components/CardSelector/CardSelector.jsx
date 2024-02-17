import { Container, Img, Images } from "./CardSelector.styled";
import Text from "@/components/Text/Text";
import { useLobbyContext } from "@/contexts/LobbyContext/LobbyContext";

const CardSelector = ({ cards, field_name, ...rest }) => {
  const { lobby } = useLobbyContext();
  const title = {
    victims: "Víctimas",
    monsters: "Monstruos",
    vestibules: "Vestíbulos",
  }[field_name];

  const handleImageClick = (card_name) => {
    if (rest.setValue) {
      rest.setValue(field_name, card_name);
    }
  };

  const handleInCollection = (card_name) => {
    if (rest.inCollection) {
      return rest.inCollection(card_name, lobby.hand);
    }
    return false;
  };

  return (
    <Container>
      <Text color="primary" fontWeight="bold" fontSize="microSmall">
        {title}:
      </Text>
      <Images>
        {Object.keys(cards).map((card_name, index) => (
          <Img
            $selected={rest.value === card_name || handleInCollection(card_name)}
            width={120}
            key={index}
            src={cards[card_name]}
            alt={card_name}
            onClick={() => handleImageClick(card_name)}
          />
        ))}
      </Images>
    </Container>
  );
};

export default CardSelector;
