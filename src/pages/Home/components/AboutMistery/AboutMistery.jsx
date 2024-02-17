import CustomButton from "@/components/CustomButton/CustomButton";
import Text from "@/components/Text/Text";
import Card from "../Card/Card";
import Developers from "../Developers/Developers";
import { Container } from "./AboutMistery.styled";

const AboutMistery = () => {
  return (
    <Container>
      <Card title="Que es Misterio?">
        <Text color="primary" fontWeight="regular" fontSize="small">
          Misterio es un juego de deducción donde cada jugador, mediante una
          serie de preguntas y apelando a la lógica, deberá reconstruir la
          escena de un crimen que acontece en un antiguo castillo de
          Transilvania. Los datos a descubrir serán elegidos al azar, y cada
          jugador deberá realizar preguntas para dilucidar poco a poco quién
          fue, dónde lo hizo y a quién. Se trata de un clásico que atraviesa
          generaciones, con una mecánica que fue implementada en otros juegos
          similares (muchos de ellos carecen de tablero y circulan de boca en
          boca).
        </Text>
      </Card>
      <Card title="Como jugar?">
        <a href="/MisterioReglas.pdf" download>
          <CustomButton name="Descargar guía" />
        </a>
      </Card>
      <Card title="Desarrolladores">
        <Developers />
      </Card>
    </Container>
  );
};
export default AboutMistery;
