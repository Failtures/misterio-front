import styled from "styled-components";
import { Arrow90degLeft } from "@styled-icons/bootstrap/Arrow90degLeft";

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ArrowBack = styled(Arrow90degLeft)`
  width: 50px;
  height: 50px;
  color: #fff;
  align-self: flex-start;
  position: absolute;
  left: 20px;
  cursor: pointer;
`;
