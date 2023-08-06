import { InputHTMLAttributes, useEffect, useState } from "react";
import * as S from "./styles";
import { DefaultTheme } from "styled-components";

export type RadioButtonProps = InputHTMLAttributes<HTMLInputElement> & {
  children?: string | React.ReactNode;
  id?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  labelColor?: keyof DefaultTheme["colors"];
  isChecked?: boolean;
  onCheck?: (status: boolean) => void;
};

const RadioButton = ({
  children,
  id,
  name,
  value,
  labelColor,
  isChecked,
  onCheck,
  disabled,
  ...props
}: RadioButtonProps) => {
  const [checked, setChecked] = useState(isChecked);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <S.Wrapper onChange={handleChange}>
      <S.RadioButton
        type="radio"
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
        {...props}
      />
      <S.Label htmlFor={id} labelColor={labelColor}>
        {children}
      </S.Label>
    </S.Wrapper>
  );
};

export default RadioButton;
