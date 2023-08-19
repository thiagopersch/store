import { darken } from "polished";
import styled, { css, DefaultTheme } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 8rem;
    padding: 0.1rem;
    background: ${theme.colors.primaryColor};
  `}
`;

export const WrapperLogo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-family: ${theme.font.secondary};
    font-size: ${theme.font.sizes.medium};
    height: 100%;
    padding: 1rem;
    transition: all 0.3s;

    &:hover {
      transform: scale(1.1);
    }

    > span {
      font-weight: ${theme.font.weight.normal};
      color: ${theme.colors.lightGray};
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.lessThan("medium")`
    display:none;
  `}
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10rem;
`;

const menuItemModifiers = {
  active: (theme: DefaultTheme) => css`
    a {
      font-weight: ${theme.font.weight.bold};
    }
  `,
};

type MenuItemProps = {
  active?: boolean;
};

export const MenuItem = styled.li<MenuItemProps>`
  ${({ theme, active }) => css`
    display: block;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.darkGray};
    position: relative;
    text-decoration: none;
    list-style: none;
    text-align: center;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 0.2rem;
      border-radius: 10rem;
      background-color: ${theme.colors.white};
      bottom: 0;
      left: 0;
      transform-origin: center;
      transform: scaleX(0);
      transition: transform 0.2s ease-in-out;
    }

    &:hover::before {
      transform-origin: center;
      transform: scaleX(1);
    }

    & + & {
      margin-top: 0.1rem;
    }

    a {
      display: flex;
      align-items: center;
      height: 100%;
      text-decoration: none;
      color: ${theme.colors.white};
      transition: all 0.2s ease;
    }

    ${!active &&
    css`
      &:hover a {
        transition: all 0.2s ease;
        font-weight: ${theme.font.weight.bold};
      }
    `}

    ${!!active && menuItemModifiers.active(theme)}
  `}
`;

export const MenuButton = styled.div`
  ${media.lessThan("medium")`
    width: 15rem;
    max-width: 50rem;
  `}
`;

export const Search = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    ${media.lessThan("medium")`
      display: none;
    `}
  `}
`;

export const NotificationLogin = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 2rem;
    padding: ${theme.spacings.large};
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primaryColor90};
    width: 100%;
    height: 5rem;
  `};
`;
