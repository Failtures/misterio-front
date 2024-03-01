import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => `
        background-color: ${theme.backgroundColor.primary};
        padding: 40px;
        display: flex;
        flex-direction: column;
        gap: 30px;    
        z-index: 300;
    `}
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectorContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px;
  margin-bottom: 20px;
`;
