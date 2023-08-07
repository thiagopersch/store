import Image from "next/image";
import Heading from "../Heading";
import * as S from "./styles";

export type LogoLinkProps = {
  children?: string | React.ReactNode;
  srcImage?: string | any;
  link?: string;
};

const LogoLink = ({ children, link, srcImage = "" }: LogoLinkProps) => {
  return (
    <Heading>
      <S.Wrapper href={link}>
        {!!srcImage && <Image src={srcImage} alt="logo" />}
        {!srcImage && children}
      </S.Wrapper>
    </Heading>
  );
};

export default LogoLink;
