import { InputHTMLAttributes, useEffect, useState } from "react";
import { DefaultTheme } from "styled-components";

import * as S from "./styles";

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  labelFor?: string;
  labelColor?: keyof DefaultTheme["colors"];
  bold?: boolean;
  value?: string | ReadonlyArray<string> | number | boolean;
  inactive?: boolean;
  isChecked?: boolean;
  onCheck?: (status: boolean) => void;
};

const Checkbox = ({
  label,
  labelFor,
  labelColor,
  value,
  inactive,
  isChecked,
  disabled,
  bold = false,
  onCheck,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(!!isChecked);

  useEffect(() => {
    if (onCheck) {
      onCheck(checked);
    }
  }, [checked, onCheck]);

  return (
    <S.Wrapper onClick={() => setChecked(!checked)}>
      <S.Input
        id={!inactive && !disabled ? labelFor : undefined}
        type="checkbox"
        checked={checked}
        value={value}
        disabled={disabled}
        inactive={inactive}
        {...props}
      />
      {!!label && (
        <S.Label
          htmlFor={!inactive && !disabled ? labelFor : undefined}
          labelColor={labelColor}
          bold={bold}
        >
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  );
};

export default Checkbox;
