import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => `
        width: 100%;
        min-height: 100vh;
        padding: 40px 0 60px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: ${theme.backgroundColor.primary}
    `}
`;
