import styled from "styled-components";

export const TextStyled = styled.p`
  ${({ color, fontSize, fontWeight, theme }) => `
      color: ${color === "secondary" && theme.color.secondary};
      color: ${color === "primary" && theme.color.primary};
      color: ${color === "error" && theme.color.error};
      font-size: ${fontSize === "microSmall" && theme.fontSize[13]};
      font-size: ${fontSize === "small" && theme.fontSize[20]};
      font-size: ${fontSize === "medium" && theme.fontSize[36]};
      font-size: ${fontSize === "big" && theme.fontSize[64]};
      font-weight: ${fontWeight === "regular" && theme.fontWeight.regular};
      font-weight: ${fontWeight === "bold" && theme.fontWeight.bold};
      font-family: ${theme.fontFamily};
  `}
  ${(props) => props.$textStyle}
`;
