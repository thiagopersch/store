import { DefaultTheme } from "styled-components";
import * as S from "./styles";

export type TextComponentProps = {
  children?: string;
  color?: keyof DefaultTheme["colors"];
};

const TextComponent = ({ children, color }: TextComponentProps) => {
  return <S.Wrapper color={color}>{children}</S.Wrapper>;
};

export default TextComponent;
