import {
  forwardRef,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useRef,
  useState,
  CSSProperties,
  useCallback,
} from "react";
import { mergeRefs } from "react-merge-refs";

import { masks } from "../../utils/masks";

import * as S from "./styles";

type InputHtmlProps =
  | InputHTMLAttributes<HTMLInputElement>
  | TextareaHTMLAttributes<HTMLTextAreaElement>;

export type InputAs = "input" | "textarea";

export type TextInputProps = InputHtmlProps & {
  name: string;
  label?: string;
  as?: InputAs;
  size?: "huge" | "large" | "medium" | "small";
  rounded?: boolean;
  type?: string;
  formRegister?: boolean;
  icon?: React.ReactNode;
  mask?: keyof typeof masks;
  containerStyle?: CSSProperties;
  onChangeValue?: (value?: string) => void;
  onClickIcon?: () => void;
  value?: string;
};

const TextInput: React.ForwardRefRenderFunction<
  HTMLInputElement,
  TextInputProps
> = (
  {
    as = "input",
    size = "large",
    name,
    rounded = false,
    label,
    value,
    icon,
    mask,
    containerStyle,
    disabled = false,
    onChangeValue,
    onClickIcon,
    ...rest
  },
  ref,
) => {
  const [fieldValue, setFieldValue] = useState<string>();
  const fieldRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const { value } = event.target;

    const masked = mask ? masks[mask](value) : value;
    setFieldValue(masked);

    if (fieldRef.current) {
      fieldRef.current.value = masked || "";
    }

    onChangeValue && onChangeValue(masked);
  };

  const setValue = useCallback(
    (value?: string) => {
      setFieldValue(() => {
        if (value === undefined) return "";
        const newValue = String(value || "");
        const masked = mask ? masks[mask](newValue) : newValue;
        return masked || "";
      });
    },
    [mask],
  );

  const inputHasValue = !!fieldRef.current?.value;

  return (
    <S.Wrapper
      inputAs={as}
      disabled={disabled}
      style={containerStyle}
      size={size}
    >
      <S.Container hasClickableIcon={!!icon && !!onClickIcon}>
        <S.Label
          htmlFor={name}
          hasValue={inputHasValue}
          inputAs={as}
          isDisabled={disabled}
        >
          <span>{label}</span>
          <S.InputContainer size={size} hasIcon={!!icon}>
            <S.Input
              rounded={rounded}
              inputSize={size}
              onChange={handleChange}
              id={name}
              as={as}
              ref={mergeRefs([fieldRef, ref])}
              name={name}
              disabled={disabled}
              value={fieldValue}
              {...rest}
            />
            {!!icon && !onClickIcon && <>{icon}</>}
          </S.InputContainer>
        </S.Label>
        {!!icon && !!onClickIcon && (
          <S.IconButton onClick={onClickIcon}>{icon}</S.IconButton>
        )}
      </S.Container>
    </S.Wrapper>
  );
};

export default forwardRef(TextInput);
