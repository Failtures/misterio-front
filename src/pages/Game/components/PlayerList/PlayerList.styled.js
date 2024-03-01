import styled from "styled-components";

export const Container = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const List = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const ColorAndPlayerName = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Detective = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.$color};
`;
