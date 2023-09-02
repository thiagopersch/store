import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: #fafafafa;
    padding: ${theme.spacings.medium};
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  `}
`;

export const WrapperInputs = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  `}
`;

export const Input = styled.div`
  width: 50%;

  ${media.lessThan("medium")`
    width: 100%;
  `}
`;

export const CTA = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: stretch;

    ${media.lessThan("medium")`
        flex-direction: column-reverse;
        width: 100%;
    `}
  `}
`;
