import { useContext } from "react";
import { Column } from "./Column";
import { AppContainer,ToggleButton } from "./styles";
import { ThemeContext } from "./context/ThemeToggle";
import { FiSun, FiMoon } from 'react-icons/fi';

export const App = () => {
  const {theme,toggleTheme} = useContext(ThemeContext);

  return (
    <AppContainer>
      <Column text="todo item list" />
      <ToggleButton onClick={toggleTheme}>
        {theme === "light" ? <FiMoon /> : <FiSun />}
      </ToggleButton>
    </AppContainer>
  );
};
