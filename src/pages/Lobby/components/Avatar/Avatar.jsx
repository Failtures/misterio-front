import Text from "@/components/Text/Text";
import { Container, Content, Triangle, Circle } from "./Avatar.styled";

const Avatar = ({ name, color }) => {
  return (
    <Container>
      <Content>
        <Circle $color={color} />
        <Text color="primary" fontWeight="regular" fontSize="small">
          {(name = name)}
        </Text>
      </Content>
      <Triangle />
    </Container>
  );
};
export default Avatar;
