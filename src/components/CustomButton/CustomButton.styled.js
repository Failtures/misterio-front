import styled from "styled-components";

export const ButtonStyled = styled.button`
  ${({ theme }) => `
  width: 100%;
  max-width: 400px;
  height: 80px;
  font-size: ${theme.fontSize["40"]};
  font-weight: ${theme.fontWeight.bold};
  font-family: ${theme.fontFamily};
  color: ${theme.color.secondary};
  background-color: ${theme.backgroundColor.secondary};
  border: none;
  cursor: pointer;
`}
  ${({ $buttonStyle }) => $buttonStyle};
`;
