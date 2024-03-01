import { useController } from "react-hook-form";
import { Container, Img, Images } from "./CardSelector.styled";
import Text from "@/components/Text/Text";
import { useLobbyContext } from "@/contexts/LobbyContext/LobbyContext";

const CardSelector = ({ name, control, cards, rules }) => {
  const { lobby } = useLobbyContext();
  const { field, fieldState } = control ? useController({ name, control, rules }) : {};

  const handleImageClick = (card_name) => {
    if (field) {
      field.onChange(card_name);
    }
  };

  const inCollection = (card_name) => {
    return lobby.hand.some((card) => card.name === card_name);
  };

  return (
    <Container>
      <Images>
        {cards.map((card, index) => (
          <Img
            $selected={field && field.value === card.name}
            $inCollection={inCollection(card.name)}
            width={120}
            key={index}
            src={card.url}
            alt={card.name}
            onClick={() => handleImageClick(card.name)}
          />
        ))}
      </Images>
      {field && (
        <Text color="error" fontWeight="regular" fontSize="microSmall">
          {fieldState.error?.message}
        </Text>
      )}
    </Container>
  );
};

export default CardSelector;
