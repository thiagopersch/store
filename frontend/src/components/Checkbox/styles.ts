import styled, { css } from "styled-components";

import { CheckboxProps } from ".";
import media from "styled-media-query";

type InputProps = Pick<CheckboxProps, "inactive">;

export const Wrapper = styled.label<CheckboxProps>`
  ${({ theme }) => css`
    display: flex;
    cursor: pointer;
  `}
`;

export const WapperInput = styled.div`
  ${({ theme }) => css`
    &:hover {
      color: ${theme.colors.primaryColor} !important;
      border-radius: 50%;
      outline: 100rem auto ${theme.colors.primaryColor};
      opacity: 0.5;
      transition: all 0.2s ease-in-out;
    }
  `}
`;

export const Input = styled.input<InputProps>`
  ${({ theme, inactive }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.08rem solid ${theme.colors.primaryColor};
    border-radius: 0.3rem;
    position: relative;
    outline: none;
    transition: all 0.2s ease-out;
    background-color: ${theme.colors.white};

    ${inactive &&
    css`
      border: 0.1rem solid ${theme.colors.lightGray};
    `}

    &::before {
      transition:
        transform 0.3s ease,
        opacity 0.2s;
      content: "";
      width: 0.6rem;
      height: 0.9rem;
      border: 0.2rem solid ${theme.colors.white};
      border-top: 0;
      border-left: 0;
      position: absolute;
      top: 0.1rem;
      transform: rotate(20deg);
      opacity: 0;
    }

    &:focus {
      box-shadow: ${theme.shadow.default};
    }

    &:checked {
      background: ${theme.colors.primaryColor};
      border-width: 0.3rem;

      &::before {
        transition:
          transform 0.6s cubic-bezier(0.2, 0.85, 0.32, 1.2),
          opacity 0.3s;

        opacity: 1;
        transform: rotate(43deg);
      }
    }
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `}
`;

export const Label = styled.label<Pick<CheckboxProps, "labelColor" | "bold">>`
  ${({ theme, labelColor, bold }) => css`
    cursor: pointer;
    padding-left: ${theme.spacings.xxsmall};
    color: ${theme.colors[labelColor!]};
    font-size: ${theme.font.sizes.small};
    line-height: 1.8rem;
    user-select: none;

    ${bold &&
    css`
      font-weight: ${theme.font.weight.bold};
    `}

    ${media.lessThan("medium")`
      font-size: ${theme.font.sizes.xsmall};
    `}
  `}
`;
