import styled from "styled-components";

export const Container = styled.form`
  ${({ theme }) => `
  width: 350px;
  padding: 20px;
  background-color: ${theme.backgroundColor.primary};
  `}
`;
