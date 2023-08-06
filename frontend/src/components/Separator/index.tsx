import styled, { css } from "styled-components";

const Separator = styled.hr`
  ${({ theme }) => css`
    border: 0;
    border-top: 1px solid ${theme.colors.lightGray};
    border-radius: 10rem;
    margin: 2rem 0;
  `}
`;

export default Separator;
