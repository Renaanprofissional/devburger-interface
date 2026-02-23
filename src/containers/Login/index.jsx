import {
  Button,
  Container,
  Form,
  InputContainer,
  LeftContainer,
  Link,
  RightContainer,
  Title,
} from './styles';
import Logo from '../../assets/logo.png';

export function Login() {
  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="Logo do DevBurger" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>DevBurger</span>, Acesse com seu
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
          <Link>Esqueci minha senha.</Link>
          <Button>Entrar</Button>
        </Form>
        <Link>Não tem conta? Cadastre-se</Link>
      </RightContainer>
    </Container>
  );
}
