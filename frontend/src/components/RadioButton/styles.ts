import styled, { css } from "styled-components";
import media from "styled-media-query";
import { RadioButtonProps } from ".";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    place-content: center;
  `}
`;

export const Label = styled.label<RadioButtonProps>`
  ${({ theme, labelColor = "primaryColor" }) => css`
    display: flex;
    gap: 0.5em;
    padding: 0 0.5rem;
    color: ${theme.colors[labelColor]};
  `}
`;

export const RadioButton = styled.input`
  ${({ theme }) => css``}
`;
