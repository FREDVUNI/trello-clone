import Card from "./Card";
import { ThemeContext } from "./context/ThemeToggle";
import { ColumnContainer, ColumnTitle } from "./styles";
import { useContext } from "react";

type Props = {
  text: string;
};

export const Column = ({ text }: Props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ColumnContainer theme={theme}>
      <ColumnTitle>{text}</ColumnTitle>
      <Card text="Generate scaffolding" theme={theme}/>
    </ColumnContainer>
  );
};
