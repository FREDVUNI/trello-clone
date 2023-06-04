import { AddNewItem } from "./AddNewItem";
import Card from "./Card";
import { AppContext } from "./context/AppState";
import { ThemeContext } from "./context/ThemeToggle";
import { ColumnContainer, ColumnTitle } from "./styles";
import { useContext } from "react";

type Props = {
  text: string;
  id: string;
};

export const Column = ({ text, id }: Props) => {
  const { theme } = useContext(ThemeContext);
  const { getTaskById } = useContext(AppContext);

  const tasks = getTaskById(id);
  return (
    <ColumnContainer theme={theme}>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks?.map((task) => (
        <Card text={task.text} key={task.id} id={task.id} theme={theme} />
      ))}
      <AddNewItem
        onAdd={() => console.log("good")}
        toggleButtonText="+ Add another card"
      />
    </ColumnContainer>
  );
};
