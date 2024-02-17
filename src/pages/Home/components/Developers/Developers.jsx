import { Container, Developer } from "./Developers.styled";

const Developers = () => {
  const developers = [
    "Angulo Israel",
    "Oieni Luciano",
    "Spitale Alex",
    "Francisco",
    "Juan Pablo",
    "Torres Tomas",
  ];
  return (
    <Container>
      {developers.map((value, index) => (
        <Developer key={index}>{value}</Developer>
      ))}
    </Container>
  );
};
export default Developers;
