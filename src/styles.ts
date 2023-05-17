import styled from "styled-components";

export const AppContainer = styled.div`
  align-items: flex-start;
  background-color: #212121;
  color: #fff;
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  padding: 20px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ColumnContainer = styled.div`
  background-color: #2b2b2b;
  color: #fff;
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 5px;
  padding: 8px;
  flex-grow: 0;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`;

export const CardContainer = styled.div`
  background-color: #363636;
  color: #fff;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 10px;
  box-shadow: #091e4240 0px 1px 0px 0px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
