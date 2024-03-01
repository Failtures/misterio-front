import Text from "@/components/Text/Text";
import { Container, Header } from "./ModalContainer.styled";

const ModalContainer = ({ title, subtitle, children }) => {
  return (
    <Container>
      <Header>
        <Text color="primary" fontWeight="bold" fontSize="medium">
          {title}
        </Text>
        <Text color="primary" fontWeight="regular" fontSize="small">
          {subtitle}
        </Text>
      </Header>
      {children}
    </Container>
  );
};
export default ModalContainer;
