import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
} from './styles';

import { Button } from '../../components/Button';
import Logo from '../../assets/logo.png';

export function Login() {
  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="Logo do DevBurger"/>
      </LeftContainer>
      <RightContainer>
        <Title>
          <span>Olá,</span> seja bem vindo ao <span>DevBurger</span>,
          <br />
           <span>Acesse</span> com seu
          <span> Login e senha.</span>
        </Title>
        <Form>
          <InputContainer>
            <label>Email</label>
            <input type="email" placeholder="Digite seu email" />
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" placeholder="Digite sua senha" />
          </InputContainer>
          <Button>Entrar</Button>
        </Form>
        <p>Não tem conta? <a href="#">Cadastre-se</a></p>
      </RightContainer>
    </Container>
  );
}
