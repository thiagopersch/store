import styled, { css } from "styled-components";
import media from "styled-media-query";
import { RadioButtonProps } from ".";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    cursor: pointer;
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
  ${({ theme }) => css`
    -webkit-appearance: none;
    appearance: none;
    background-color: ${theme.colors.white};
    margin: 0;
    font: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid currentColor;
    border-radius: 50%;
    transform: translateY(-0.075em);

    & + & {
      margin-top: 1em;
    }
  `}
`;
