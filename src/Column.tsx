import { CardContainer, ColumnContainer, ColumnTitle } from "./styles";

type Props = {
  text: string;
};

export const Column = ({ text }: Props) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <CardContainer>Generate scaffolding</CardContainer>
      <CardContainer>Learn TypesScript</CardContainer>
      <CardContainer>Use static typing</CardContainer>
    </ColumnContainer>
  );
};
