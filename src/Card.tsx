import { CardContainer } from "./styles";

type Props = {
  text: string;
  theme: string;
  id:string
};

const Card = ({ text,theme,id }: Props) => {
  return <CardContainer id={id} theme={theme}>{text}</CardContainer>;
};

export default Card;
