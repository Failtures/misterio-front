import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  height: 100%;
  max-height: 250px;
  margin-left: 20px;

  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
`;

export const ChatWindow = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid ${({ theme }) => theme.color.primary};
  padding: 10px;
  border-bottom: none;
  overflow: auto;
`;
