import styled, { css, DefaultTheme } from "styled-components";

import { BadgeProps } from "./";

export type WrapperProps = Pick<BadgeProps, "styledType">;

const wrapperModifiers = {
  success: (theme: DefaultTheme) => css`
    background: ${theme.colors.babyGreen};
    color: ${theme.colors.black};
    box-shadow: ${theme.shadow.default};
  `,
  lightGrey: (theme: DefaultTheme) => css`
    background: ${theme.colors.darkGray};
    color: ${theme.colors.white};
    box-shadow: ${theme.shadow.default};
  `,
  blue: (theme: DefaultTheme) => css`
    background: ${theme.colors.babyBlue};
    color: ${theme.colors.black};
    box-shadow: ${theme.shadow.default};
  `,
  orange: (theme: DefaultTheme) => css`
    background: ${theme.colors.alert};
    color: ${theme.colors.white};
    box-shadow: ${theme.shadow.default};
  `,
  danger: (theme: DefaultTheme) => css`
    background: ${theme.colors.danger};
    color: ${theme.colors.white};
    box-shadow: ${theme.shadow.default};
  `,
  lightRed: (theme: DefaultTheme) => css`
    background: ${theme.colors.lightRed};
    color: ${theme.colors.black};
    box-shadow: ${theme.shadow.default};
  `,
};

export const Wrapper = styled.span<WrapperProps>`
  ${({ theme, styledType }) => css`
    display: inline-block;
    padding: 0.2rem 2rem;
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.weight.medium};
    font-style: normal;
    line-height: 1.6rem;
    text-align: center;
    border-radius: 10rem;

    ${wrapperModifiers[styledType](theme)}
  `}
`;
