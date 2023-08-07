import styled, { DefaultTheme, css } from "styled-components";
import { SectionBackgroundProps } from ".";

const containerBackgroundActivate = (theme: DefaultTheme) => css`
  background-color: ${theme.colors.primaryColor60};
  color: ${theme.colors.white};
  transition: ${theme.transition.fast};
`;

export const Wrapper = styled.div<SectionBackgroundProps>`
  ${({ theme, background }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    min-height: 100vh;
    display: flex;
    align-items: center;

    ${!!background && containerBackgroundActivate(theme)};
  `}
`;
