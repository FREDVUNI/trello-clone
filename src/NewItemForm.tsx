import { useContext, useState } from "react";
import { NewItemButton, NewItemContainer, NewItemInput } from "./styles";
import { ThemeContext } from "./context/ThemeToggle";
import { UseFocus } from "./useFocus";

type Props = {
  onAdd: (text: string) => void;
};

export const NewItemForm = ({ onAdd }: Props) => {
  const [input, setInput] = useState("");
  const { theme } = useContext(ThemeContext);
  const inputRef = UseFocus();

  const handleAddText = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onAdd(text);
    }
  };

  return (
    <NewItemContainer>
      <NewItemInput
        ref={inputRef}
        theme={theme}
        placeholder="Enter Item here ..."
        value={input}
        onChange={(e: any) => setInput(e.target.value)}
        onKeyPress={handleAddText}
      />
      <NewItemButton onClick={() => onAdd(input)}>create</NewItemButton>
    </NewItemContainer>
  );
};
