import { useState } from "react";
import { NewItemButton, NewItemContainer, NewItemInput } from "./styles";

type Props = {
  onAdd: (text: string) => void;
};

export const NewItemForm = ({ onAdd }: Props) => {
  const [input, setInput] = useState("");
  return (
    <NewItemContainer>
      <NewItemInput
        value={input}
        onChange={(e: any) => setInput(e.target.value)}
      />
      <NewItemButton onClick={() => onAdd(input)}>create</NewItemButton>
    </NewItemContainer>
  );
};
