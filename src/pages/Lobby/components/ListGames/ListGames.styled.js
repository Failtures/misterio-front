import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 50px 30px;
  background-color: ${({ theme }) => theme.backgroundColor.primary};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${({ theme }) => `
    color: ${theme.color.primary};
    font-weight:  ${theme.fontWeight.regular};
    font-size:  ${theme.fontSize[16]};
    font-family: ${theme.fontFamily}
  `}
`;

export const TableHead = styled.thead`
  width: 100%;
  height: 40px;
  text-align: center;
  border-bottom: ${({ theme }) => `1px solid ${theme.color.primary}`};
`;

export const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-height: 400px;
  height: 200px;
  overflow: auto;
  gap: 10px;
`;

export const TableRow = styled.tr`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TableRowHead = styled.tr`
  width: 100%;
  display: flex;
`;

export const TableCell = styled.td`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
