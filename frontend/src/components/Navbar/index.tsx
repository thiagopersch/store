import Image from "next/image";
import Link from "next/link";
import { Search } from "@styled-icons/feather";
import { NotificationsNone } from "@styled-icons/material-outlined/NotificationsNone";

import logo from "@/assets/images/logo.png";
import Button from "../Button";
import Dropdown from "../Dropdown";
import UserDropdown from "../UserDropdown";
import TextInput from "../TextInput";

import * as S from "./styles";

const Navbar = () => {
  return (
    <>
      <S.Wrapper>
        <S.WrapperLogo>
          <Link href="/">
            <Image src={logo} width={150} height={50} quality={80} alt="logo" />
          </Link>
        </S.WrapperLogo>
        <S.Search>
          <TextInput label="Pesquisar" name="search" icon={<Search />} />
        </S.Search>
        <S.NotificationLogin>
          <Button
            styleType="none"
            color="primaryColor"
            size="large"
            icon={<NotificationsNone />}
          />
          <UserDropdown />
        </S.NotificationLogin>
      </S.Wrapper>
      <S.Header>
        <S.Menu>
          <S.MenuList>
            <S.MenuItem>
              <Link href="/">Inicio</Link>
            </S.MenuItem>
            <S.MenuItem>
              <Dropdown children="Cadastros" />
            </S.MenuItem>
          </S.MenuList>
        </S.Menu>
      </S.Header>
    </>
  );
};

export default Navbar;
