import styled, { css } from "styled-components";
import media from "styled-media-query";
import { RadioButtonProps } from ".";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  `}
`;

export const Label = styled.label<RadioButtonProps>`
  ${({ theme, labelColor = "primaryColor" }) => css`
    display: flex;
    gap: 0.5em;
    padding: 0 0.5rem;
    cursor: pointer;
    color: ${theme.colors[labelColor]};

    &:focus-within {
      color: ${theme.colors[labelColor]};
    }
  `}
`;

export const RadioButton = styled.input`
  ${({ theme }) => css`
    -webkit-appearance: none;
    appearance: none;
    background-color: ${theme.colors.white};
    margin: 0;
    font: inherit;
    color: ${theme.colors.primaryColor};
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid ${theme.colors.primaryColor};
    border-radius: 50%;
    transform: translateY(-0.075em);
    display: flex;
    align-items: center;
    justify-content: center;
    place-content: center;
    cursor: pointer;
    position: relative;

    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    & + & {
      margin-top: 1em;
    }

    &::before {
      content: "";
      position: absolute;
      width: 0.65em;
      height: 0.65em;
      border-radius: 50%;
      opacity: 0;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em ${theme.shadow.default};
      background-color: ${theme.colors.primaryColor};
    }

    &:checked:before {
      transform: scale(1);
      opacity: 1;
      color: ${theme.colors.primaryColor};
    }

    &:focus {
      box-shadow: ${theme.shadow.default};
    }
  `}
`;
