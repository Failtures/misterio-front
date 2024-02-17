import styled from "styled-components";

export const Container = styled.form`
  ${({ theme }) => `
        background-color: ${theme.backgroundColor.primary};
        padding: 40px;
        display: flex;
        flex-direction: column;
        gap: 30px;    
        z-index: 99;
    `}
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px;
  margin-bottom: 20px;
`;
