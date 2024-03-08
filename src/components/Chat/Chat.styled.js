import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
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
