import { useContext } from "react";
import { Column } from "./Column";
import { AddNewItem } from "./AddNewItem";
import { AppContainer, ToggleButton } from "./styles";
import { ThemeContext } from "./context/ThemeToggle";
import { FiSun, FiMoon } from "react-icons/fi";
import NavBar from "./NavBar";

export const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <NavBar />
      <AppContainer theme={theme}>
        <Column text="todo item list" />
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
