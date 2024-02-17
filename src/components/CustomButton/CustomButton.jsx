import { ButtonStyled } from "./CustomButton.styled";

const CustomButton = ({ name, onClick, style, ...props }) => {
  return (
    <ButtonStyled onClick={onClick} $buttonStyle={style} {...props}>
      {name}
    </ButtonStyled>
  );
};
export default CustomButton;
