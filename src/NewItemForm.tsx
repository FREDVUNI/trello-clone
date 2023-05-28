import { useContext, useState } from "react";
import { NewItemButton, NewItemContainer, NewItemInput } from "./styles";
import { ThemeContext } from "./context/ThemeToggle";

type Props = {
  onAdd: (text: string) => void;
};

export const NewItemForm = ({ onAdd }: Props) => {
  const [input, setInput] = useState("");
  const { theme } = useContext(ThemeContext);
  return (
    <NewItemContainer>
      <NewItemInput
        theme={theme}
        placeholder="Enter Item here ..."
        value={input}
        onChange={(e: any) => setInput(e.target.value)}
      />
      <NewItemButton onClick={() => onAdd(input)}>create</NewItemButton>
    </NewItemContainer>
  );
};
