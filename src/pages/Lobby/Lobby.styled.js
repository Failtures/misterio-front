import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => `
        width: 100%;
        min-height: 100vh;
        padding: 50px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background-color: ${theme.backgroundColor.primary};      
    `}
`;
