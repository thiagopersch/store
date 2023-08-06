import { ThemeProvider } from "styled-components";

import theme from "../src/styles/theme";
import GlobalStyles from "../src/styles/global";

export const parameters = {
  backgrounds: {
    default: "black",
    values: [
      {
        name: "white",
        value: theme.colors.white,
      },
      {
        name: "black",
        value: theme.colors.black,
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
