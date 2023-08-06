import {
  GlobalStyleComponent,
  DefaultTheme,
  createGlobalStyle,
  css,
} from "styled-components";

import fonts from "../styles/fonts";

type GlobalStyleProps = {
  theme?: DefaultTheme;
};

const GlobalStyles: GlobalStyleComponent<
  GlobalStyleProps,
  DefaultTheme | undefined
> = createGlobalStyle`
  ${fonts.map(
    (font) => css`
      @font-face {
        font-family: ${font.name};
        font-style: ${font.style};
        font-weight: ${font.weight};
        font-display: ${font.display};
        src:
          local(""),
          url("${font.url}") format("${font.format}");
      }
    `
  )}

  * {
    margin:0;
    padding:0;
    box-sizing: border-box;

    &::before, &::after {
      box-sizing: inherit;
    }
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  
  body {
    ${({ theme }) => css`
      background: ${theme.colors.white};
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.black};
      font-family: ${theme.font.primary};
      outline: none;
    `}

    button {
      cursor: pointer;
    }
  }
`;
export default GlobalStyles;
