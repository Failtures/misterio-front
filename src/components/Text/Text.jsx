import { TextStyled } from "./Text.styled";

const Text = ({ color, fontWeight, fontSize, style, children }) => {
  return (
    <TextStyled
      color={color}
      fontWeight={fontWeight}
      fontSize={fontSize}
      $textStyle={style}
    >
      {children}
    </TextStyled>
  );
};
export default Text;
