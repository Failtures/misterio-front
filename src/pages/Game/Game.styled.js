import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.backgroundColor.primary};
`;

export const PlayersAndInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 50px;
  height: 100%;
  min-height: 100vh;
`;

export const Actions = styled.div`
  width: 100%;
  max-width: 400px;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 50px 0;
`;

export const Buttons = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: auto;
`;
