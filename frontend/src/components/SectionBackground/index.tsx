import * as S from "./styles";

export type SectionBackgroundProps = {
  children?: string | React.ReactNode;
  background?: boolean;
};

const SectionBackground = ({
  children,
  background = false,
}: SectionBackgroundProps) => {
  return <S.Wrapper background={background}>{children}</S.Wrapper>;
};

export default SectionBackground;
