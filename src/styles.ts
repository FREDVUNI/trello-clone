import styled, { createGlobalStyle } from "styled-components";

type AppContainerProps = {
  theme: "light" | "dark";
};

type AddButtonProps = {
  dark?: boolean;
};

export const NavbarContainer = styled.nav`
  background-color: #026aa7;
  color: #fff;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  @media (max-width: 768px) {
    padding: 10px 5px;
  }
`;

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 20 auto;

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
    top: 18px;
    right: 50px;
    margin-bottom: 0px;
  }
`;
export const AppContainer = styled.div<AppContainerProps>`
  align-items: flex-start;
  background-color: ${({ theme }) =>
    theme === "dark" ? "#212121" : "#f5f5f5"};
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "#333")};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 0px;
  min-height: 100vh;
  padding: 20px;
  width: 100%;
  margin-top: 20px;

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
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 0px;
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
  width: 100%;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
export const ToggleButton = styled.button<AppContainerProps>`
  cursor: pointer;
  border: none;
  font-size: large;
  position: fixed;
  top: 15px;
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

export const AddItemButton = styled.button<AddButtonProps>`
  background-color: #363636;
  border-radius: 5px;
  border: none;
  color: ${(props) => (props.dark ? "#363636" : "#f0f0f0")};
  cursor: pointer;
  max-width: 300px;
  font-size: large;
  padding: 10px 12px;
  margin-top: 30px;
  text-align: left;
  transition: background 85ms ease-in;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const NewItemContainer = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  margin-top: 40px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const NewItemButton = styled.div`
  background-color: rgb(2, 106, 167);
  border-radius: 0px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;
  text-align: center;
  cursor: pointer;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const NewItemInput = styled.input`
  border-radius: 0px;
  border: none;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 0px 0px;
  font-size: 15px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
  background-color: ${({ theme }) =>
    theme === "dark" ? "#363636" : "#f0f0f0"};
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "#333")};

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const GlobalStyle = createGlobalStyle`
  height: 300px;
  width: 300px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 8px; 
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }
`;
