import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor.primary};
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
`;
