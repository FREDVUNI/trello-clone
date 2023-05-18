import styled from "styled-components";

type AppContainerProps = {
  theme: "light" | "dark";
};

export const AppContainer = styled.div<AppContainerProps>`
  align-items: flex-start;
  background-color: ${({ theme }) =>
    theme === "dark" ? "#212121" : "#f5f5f5"};
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "#333")};
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

export const ColumnContainer = styled.div<AppContainerProps>`
  background-color: ${({ theme }) =>
    theme === "dark" ? "#2b2b2b" : "#eaeaea"};
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "#333")};
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

export const ColumnTitle = styled.div<AppContainerProps>`
  padding: 6px 16px 12px;
  font-weight: bold;
`;

export const CardContainer = styled.div<AppContainerProps>`
  background-color: ${({ theme }) =>
    theme === "dark" ? "#363636" : "#f0f0f0"};
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "#333")};
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
export const ToggleButton = styled.button<AppContainerProps>`
  cursor: pointer;
  border: none;
  font-size: large;
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;

  @media (max-width: 768px) {
    right: 10px;
    margin-bottom: 0px;
  }
`;
