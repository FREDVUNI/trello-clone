import { useContext } from "react";
import { Column } from "./Column";
import { AddNewItem } from "./AddNewItem";
import { AppContainer, ToggleButton, GlobalStyle } from "./styles";
import { ThemeContext } from "./context/ThemeToggle";
import { FiSun, FiMoon } from "react-icons/fi";
import NavBar from "./NavBar";
import { AppContext } from "./context/AppState";

export const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { lists } = useContext(AppContext)

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <AppContainer theme={theme}>
        {
          lists?.map((list) =>(
            <Column text={list.text} key={list.id} id={list.id} />
          ))
        }
        <AddNewItem
          toggleButtonText="+ Add another field"
          onAdd={() => console.log("good")}
        />
        <ToggleButton onClick={toggleTheme} theme={theme}>
          {theme === "light" ? (
            <FiMoon className="icon" />
          ) : (
            <FiSun className="icon" />
          )}
        </ToggleButton>
      </AppContainer>
    </>
  );
};
