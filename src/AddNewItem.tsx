import { useState } from "react";
import { AddItemButton } from "./styles";

type Props = {
  onAdd: (text: string) => void;
  toggleButtonText: string;
  dark?: boolean;
};

export const AddNewItem = ({ onAdd, toggleButtonText, dark }: Props) => {
  const [showForm, setShowForm] = useState<boolean>(false);

  if (showForm) {
  }
  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};
