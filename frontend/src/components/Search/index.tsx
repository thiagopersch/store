import { darken } from "polished";
import styled, { css } from "styled-components";
import media from "styled-media-query";

const Search = styled.div`
  ${({ theme }) => css` 
  position: relative;
  border-radius: 3rem,
  background-color: ${theme.colors.white};
  margin-left: 0,
  width: 100%;

  &:hover {
    background-color: ${darken(0.1, theme.colors.white)};,
  },
  ${media.lessThan("medium")`
    margin-left: ${theme.spacings.small};
    width: auto;
  `}
`}
`;

export default Search;
