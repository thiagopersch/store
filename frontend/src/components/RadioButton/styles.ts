import styled, { css } from "styled-components";
import media from "styled-media-query";
import { RadioButtonProps } from ".";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;

    ${media.lessThan("medium")`
      flex-direction: column;
    `}
  `}
`;

export const RadioButton = styled.input`
  ${({ theme }) => css`
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    height: var(2rem);
    width: var(2rem);
    outline: none;
    margin: 0;
    cursor: pointer;
    border: 2px solid var(#7C96B2);
    background: transparent;
    border-radius: 50%;
    display: grid;
    justify-self: end;
    justify-items: center;
    align-items: center;
    overflow: hidden;
    transition: border .5s ease;
    &::before,
    &::after {
      content: "";
      display: flex;
      justify-self: center;
      border-radius: 50%;
    }
    &::before {
      position: absolute;
      width: 100%;
      height: 100%;
      background: ${theme.colors.white};
      z-index: 1;
      opacity: 1;
    }
    &::after {
      position: relative;
      width: calc(100% /2);
      height: calc(100% /2);
      top: var(top, 100%);
      transition: top .5s cubic-bezier(0.48, 1.97, 0.5, 0.63);
    }
    &:checked {
      color: ${theme.colors.primaryColor};
      &::after {
        top: 0%;
        animation: stretch-animate .3s ease-out .17s;
      }
      &::before {
        opacity: 0;
      }
      ~ input[type="radio"] {
        &::after {
          top: -100%;
        }
      }
    }
    &:not(:checked) {
      &::before {
        opacity: 1;
        transition: opacity 0s linear .5s;
      }
    }
  }
  @keyframes stretch-animate {
  0% {
    transform: scale(1,1)
  }
  28% {
    transform: scale(1.15,.85)
  }
  50% {
    transform: scale(.9,1.1)
  }
  100% {
    transform: scale(1,1)
  }
}
  `}
`;

export const Label = styled.label<RadioButtonProps>`
  ${({ theme, labelColor = "primaryColor" }) => css`
    padding: 0 0.5rem;
    color: ${theme.colors[labelColor]};
  `}
`;
