import { ThemeContext } from "./context/ThemeToggle";
import { CardContainer, ColumnContainer, ColumnTitle } from "./styles";
import { useContext } from "react";

type Props = {
  text: string;
};

export const Column = ({ text }: Props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ColumnContainer theme={theme}>
      <ColumnTitle>{text}</ColumnTitle>
      <CardContainer theme={theme}>Generate scaffolding</CardContainer>
      <CardContainer theme={theme}>Learn TypesScript</CardContainer>
      <CardContainer theme={theme}>Use static typing</CardContainer>
    </ColumnContainer>
  );
};
