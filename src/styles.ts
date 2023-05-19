import styled from "styled-components";

type AppContainerProps = {
  theme: "light" | "dark";
};
export const NavbarContainer = styled.nav`
  background-color: #026aa7;
  color: #fff;
  padding: 10px;

  @media (max-width: 768px) {
    padding: 10px 5px;
  }
`;

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavbarLogo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const NavbarLinks = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    display: ${({ isOpen }: any) => (isOpen ? "flex" : "none")};
  }
`;

export const NavbarLink = styled.li`
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }

  a {
    color: #fff;
    text-decoration: none;
    padding: 5px;

    &:hover {
      text-decoration: none;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 5px;
  }
`;

export const TogglesButton = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 3px;
    width: 25px;
    background-color: #fff;
    margin-bottom: 4px;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 15px;
    right: 50px;
    margin-bottom: 0px;
  }
`;
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

  .icon {
    color: #fff;
    font-size: 25px;
  }

  @media (max-width: 768px) {
    right: 10px;
    margin-bottom: 0px;
  }
`;
