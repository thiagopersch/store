import styled, { css } from "styled-components";
import { TextComponentProps } from ".";

export const Wrapper = styled.div<TextComponentProps>`
  ${({ theme, color = "white" }) => css`
    color: ${theme.colors[color]};
  `}
`;
