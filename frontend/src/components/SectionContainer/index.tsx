import * as S from "./styles";

export type SectionContainerProps = {
  children?: string | React.ReactNode;
};

const SectionContainer = ({ children }: SectionContainerProps) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default SectionContainer;
