import styled, { css, DefaultTheme } from "styled-components";
import { InputAs } from ".";

type WrapperProps = {
  inputAs: InputAs;
  disabled: boolean;
  size: "huge" | "large" | "medium" | "small";
};

const wrapperInputModifiers = {
  huge: () => css`
    height: 10rem;
  `,
  large: () => css`
    height: 5rem;
  `,
  medium: () => css`
    height: 3rem;
  `,
  small: () => css`
    height: 2rem;
  `,
};

const wrapperTextAreaModifiers = {
  huge: () => css`
    max-height: 80rem;
  `,
  large: () => css`
    max-height: 40rem;
  `,
  medium: () => css`
    max-height: 30rem;
  `,
  small: () => css`
    max-height: 20rem;
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ inputAs, size, disabled }) => css`
    position: relative;
    line-height: 1.2rem;
    width: 100%;

    ${disabled &&
    css`
      * {
        pointer-events: none !important;
      }
    `}

    ${inputAs === "textarea"
      ? css`
          ${wrapperTextAreaModifiers[size]}
        `
      : css`
          ${wrapperInputModifiers[size]}
        `}
  `}
`;

type ContainerProps = {
  hasClickableIcon: boolean;
};
export const Container = styled.div<ContainerProps>`
  ${({ hasClickableIcon }) => css`
    height: 100%;

    ${hasClickableIcon &&
    css`
      display: grid;
      grid-template-columns: 1fr 4rem;
    `}
  `}
`;

const labelModifiers = {
  inFocusOrValue: (theme: DefaultTheme, disabled: boolean) => css`
    box-shadow: inset 0rem 0rem 0rem 0.2rem
      ${disabled ? theme.colors.lightGray : theme.colors.primaryColor};

    span {
      top: 0;
      transform: translateY(-50%);
      left: 0.8rem;
      font-size: ${theme.font.sizes.xsmall};
      border-radius: 10rem;
      color: ${disabled ? theme.colors.lightGray : theme.colors.primaryColor};
    }
  `,
  disabled: () => css`
    background: rgba(151, 174, 177, 0.2);

    span {
      background: transparent !important;
    }
  `,
  input: () => css`
    top: 50%;
    transform: translateY(-50%);
  `,
  textarea: () => css`
    top: 0.5rem;
    transform: translateY(50%);
  `,
};

type LabelProps = {
  hasValue: boolean;
  inputAs: InputAs;
  isDisabled?: boolean;
};

export const Label = styled.label<LabelProps>`
  ${({ theme, hasValue, inputAs, isDisabled }) => css`
    display: block;
    cursor: text;
    width: 100%;
    height: 100%;
    max-height: inherit;
    transition: ${theme.transition.fast};
    border-radius: 0.3rem;

    span {
      padding: 0.3rem 0.5rem;
      position: absolute;
      left: 1rem;
      background-color: ${theme.colors.white};
      border-radius: 10rem;
      font-size: ${theme.font.sizes.small};
      transition: ${theme.transition.fast};
      color: ${theme.colors.lightGray};

      ${labelModifiers[inputAs]}
    }

    ${hasValue && labelModifiers.inFocusOrValue(theme, !!isDisabled)}
    ${!!isDisabled && labelModifiers.disabled}

    &:hover {
      box-shadow: inset 0rem 0rem 0rem 0.1rem ${theme.colors.primaryColor};
    }

    &:focus-within {
      ${labelModifiers.inFocusOrValue(theme, !!isDisabled)}
    }
  `}
`;

const inputContainerModifiers = {
  huge: (hasIcon: boolean) => css`
    grid-template-columns: ${hasIcon ? "1fr 8rem" : "1fr"};
    > svg {
      width: 4.8rem;
    }
  `,
  large: (hasIcon: boolean) => css`
    grid-template-columns: ${hasIcon ? "1fr 4rem" : "1fr"};
    > svg {
      width: 2.4rem;
    }
  `,
  medium: (hasIcon: boolean) => css`
    grid-template-columns: ${hasIcon ? "1fr 2rem" : "1fr"};
    > svg {
      width: 1.6rem;
    }
  `,
  small: (hasIcon: boolean) => css`
    grid-template-columns: ${hasIcon ? "1fr 1rem" : "1fr"};
    > svg {
      width: 1.2rem;
    }
  `,
};

type InputContainerProps = {
  hasIcon: boolean;
  size: "huge" | "large" | "medium" | "small";
};
export const InputContainer = styled.div<InputContainerProps>`
  ${({ size, hasIcon }) => css`
    display: flex;
    height: 100%;
    align-items: center;

    > svg {
      justify-self: center;
    }

    ${inputContainerModifiers[size](hasIcon)}
  `}
`;

const TextArea = (theme: DefaultTheme) => css`
  padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
`;

const inputModifiers = {
  huge: (theme: DefaultTheme) => css`
    padding: 0 ${theme.spacings.small};
    font-size: ${theme.font.sizes.small};
  `,
  large: (theme: DefaultTheme) => css`
    padding: 0 ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.small};
  `,
  medium: (theme: DefaultTheme) => css`
    padding: 0 ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.small};
  `,
  small: (theme: DefaultTheme) => css`
    padding: 0 calc(${theme.spacings.xsmall} / 2);
    font-size: ${theme.font.sizes.xsmall};
  `,
  disabled: (theme: DefaultTheme) => css`
    color: ${theme.colors.lightGray};
  `,
  rounded: (theme: DefaultTheme) => css`
    border-radius: 10rem;
  `,
};

type InputProps = {
  inputSize: "huge" | "large" | "medium" | "small";
  rounded: boolean;
};
export const Input = styled.input<InputProps>`
  ${({ theme, inputSize, disabled, rounded }) => css`
    &:not(input) {
      ${TextArea(theme)}
    }

    background: ${theme.colors.white};
    border: 0.05rem solid ${theme.colors.primaryColor};
    outline: 0;
    border-radius: 0.3rem;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    height: 100%;
    max-height: inherit;
    font-family: ${theme.font.primary};
    color: ${theme.colors.darkGray};
    box-shadow: ${theme.shadow.default};

    &:invalid {
      border: 0.05rem solid ${theme.colors.primaryRed};
    }

    ${inputModifiers[inputSize](theme)}
    ${!!disabled && inputModifiers.disabled(theme)}
    ${!!rounded && inputModifiers.rounded(theme)}
  `}
`;

export const IconButton = styled.button.attrs({ type: "button" })`
  ${({ theme }) => css`
    cursor: pointer;
    height: 100%;
    stroke-width: 2;
    background-color: transparent;
    border: inherit;
    outline: 0;
    margin: 0.2rem;
    margin-left: 0;
    color: ${theme.colors.primaryColor};
  `}
`;
