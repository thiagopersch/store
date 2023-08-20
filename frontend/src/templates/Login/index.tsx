import Heading from "@/components/Heading";
import Base from "../Base";
import SectionContainer from "@/components/SectionContainer";
import TextInput from "@/components/TextInput";

import * as S from "./styles";
import Button from "@/components/Button";
import { LogIn } from "@styled-icons/feather";

const Login = () => {
  return (
    <Base>
      <SectionContainer>
        <S.Wrapper>
          <Heading size="md">Login</Heading>
          <S.WrapperInputs>
            <S.Input>
              <TextInput name="email" label="E-mail" />
            </S.Input>
            <S.Input>
              <TextInput name="password" label="Senha" />
            </S.Input>
          </S.WrapperInputs>
          <S.CTA>
            <Button size="large" icon={<LogIn />}>
              Entrar
            </Button>
          </S.CTA>
        </S.Wrapper>
      </SectionContainer>
    </Base>
  );
};

export default Login;
