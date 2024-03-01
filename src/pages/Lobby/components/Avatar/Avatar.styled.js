import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
`;

export const Content = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border: 2px solid ${({ theme }) => theme.backgroundColor.secondary};
`;

export const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  border-bottom: 50px solid ${({ theme }) => theme.backgroundColor.secondary};
  transform: rotate(180deg);
`;

export const Circle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background-color: ${({ $color }) => $color || "#606060"};
`;
