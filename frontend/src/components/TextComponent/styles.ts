import styled, { css } from "styled-components";
import { TextComponentProps } from ".";

export const Wrapper = styled.span<TextComponentProps>`
  ${({ theme, color = "black" }) => css`
    color: ${theme.colors[color]};
  `}
`;
