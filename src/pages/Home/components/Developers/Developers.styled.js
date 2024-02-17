import styled from "styled-components";

export const Container = styled.ul`
  padding-left: 15px;
  list-style-type: square;
`;

export const Developer = styled.li`
  ${({ theme }) => `
        font-weight: ${theme.fontWeight.regular};
        font-size: ${theme.fontSize[20]};
        font-family: ${theme.fontFamily};
        color: ${theme.color.primary};
    `}
`;
