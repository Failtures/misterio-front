import { useEffect, useState } from "react";
import { useController } from "react-hook-form";
import Text from "@/components/Text/Text";
import { useLobbyContext } from "@/contexts/LobbyContext/LobbyContext";
import { Skeleton } from "@mui/material";
import { Container, Img, Images } from "./CardSelector.styled";

const CardSelector = ({ name, control, cards, rules }) => {
  const { lobby } = useLobbyContext();
  const { field, fieldState } = control ? useController({ name, control, rules }) : {};
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      const promises = cards.map((card) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = card.url;
          img.onload = () => resolve();
        });
      });
      await Promise.all(promises);
      setImageLoaded(true);
    };

    preloadImages();
  }, [cards]);

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
      {imageLoaded ? (
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
      ) : (
        <Skeleton
          variant="rectangular"
          width={6 * 120}
          height={180}
          animation="wave"
          sx={{ backgroundColor: "#242323" }}
        />
      )}

      {field && (
        <Text color="error" fontWeight="regular" fontSize="microSmall">
          {fieldState.error?.message}
        </Text>
      )}
    </Container>
  );
};
export default CardSelector;
