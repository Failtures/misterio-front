import Text from "../../components/Text/Text";
import Login from "./components/Login/Login";
import { Container } from "./Home.styled";
import AboutMistery from "./components/AboutMistery/AboutMistery";

const Home = () => {
  return (
    <Container>
      <Text color="primary" fontWeight="bold" fontSize="big">
        Bienvenido a Misterio
      </Text>
      <img src="/MisterioBackground.png" alt="Misterio background" />
      <Login />
      <AboutMistery />
    </Container>
  );
};
export default Home;
