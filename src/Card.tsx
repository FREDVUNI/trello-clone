import { CardContainer } from "./styles";

type Props = {
  text: string;
  theme: string;
};

const Card = ({ text,theme }: Props) => {
  return <CardContainer theme={theme}>{text}</CardContainer>;
};

export default Card;
