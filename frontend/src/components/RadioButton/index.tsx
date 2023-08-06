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
  const [checked, setChecked] = useState(!!isChecked);

  useEffect(() => {
    if (onCheck) {
      onCheck(checked);
    }
  }, [checked, onCheck]);

  return (
    <S.Wrapper onClick={() => setChecked(!checked)}>
      <S.RadioButton
        type="radio"
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
        {...props}
      />
      {!!children && (
        <S.Label htmlFor={id} name={name} labelColor={labelColor}>
          {children}
        </S.Label>
      )}
    </S.Wrapper>
  );
};

export default RadioButton;
