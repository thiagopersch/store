import styled, { css } from "styled-components";
import { SectionContainerProps } from ".";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 0 auto;
    padding: ${theme.spacings.large};
    width: 100%;
  `}
`;
