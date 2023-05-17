import {
  AppContainer,
  CardContainer,
  ColumnContainer,
  ColumnTitle,
} from "./styles";

export const App = () => {
  return (
    <AppContainer>
      <ColumnContainer>
        <ColumnTitle>Todo</ColumnTitle>
        <CardContainer>First item</CardContainer>
        <CardContainer>First item</CardContainer>
        <CardContainer>First item</CardContainer>
        <CardContainer>First item</CardContainer>
        <CardContainer>First item</CardContainer>
        <CardContainer>First item</CardContainer>
      </ColumnContainer>
    </AppContainer>
  );
};
