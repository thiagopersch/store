import { InputHTMLAttributes } from "react";
import * as S from "./styles";
import { DefaultTheme } from "styled-components";

export type RadioButtonProps = InputHTMLAttributes<HTMLInputElement> & {
  children?: string | undefined;
  id?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  labelColor?: keyof DefaultTheme["colors"];
};

const RadioButton = ({
  children,
  id,
  name,
  value,
  checked = true,
  labelColor,
}: RadioButtonProps) => {
  return (
    <S.Wrapper>
      <S.RadioButton
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
      />
      <S.Label htmlFor={id} id={id} labelColor={labelColor}>
        {children}
      </S.Label>
    </S.Wrapper>
  );
};

export default RadioButton;
