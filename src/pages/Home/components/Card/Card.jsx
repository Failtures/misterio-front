import Text from "@/components/Text/Text";
import { Container, Children } from "./Card.styled";
const Card = ({ title, children }) => {
  return (
    <Container>
      <Text color="primary" fontWeight="bold" fontSize="medium">
        {title}
      </Text>
      <Children>{children}</Children>
    </Container>
  );
};
export default Card;
