import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Img = styled.img`
  border: 1px solid transparent;
  filter: ${(props) => (!props.$inCollection ? "brightness(50%) sepia(100%) hue-rotate(320deg)" : "none")};
  box-shadow: ${(props) => (props.$selected ? "0 0 10px 2px red" : "none")};
`;

export const Images = styled.div`
  display: flex;
`;
