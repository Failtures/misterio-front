import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => `
    width: 100%;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.9);
    `}
`;
