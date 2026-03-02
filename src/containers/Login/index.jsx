import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
  Link,
} from './styles';

import { Button } from '../../components/Button';
import { useUser } from '../../hooks/UserContext';
import Logo from '../../assets/logo.png';
import { api } from '../../services/api';

export function Login() {
  const navigate = useNavigate();
  const { putUserData } = useUser()

  const schema = yup
    .object({
      email: yup
        .string()
        .email('Digite um email válido')
        .required('O email é obrigatório'),
      password: yup
        .string()
        .min(6, 'A senha deve ter no mínimo 6 caracteres')
        .required('A senha é obrigatória'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const { data: userData } = await toast.promise(
      api.post('/sessions', {
        email: data.email,
        password: data.password,
      }),
      {
        pending: 'Verificando suas credenciais...',
        success: {
          render() {
            setTimeout(() => {
              navigate('/');
            }, 2000);
            return 'Login realizado com sucesso!';
          },
        },
        error:
          'Erro ao fazer login. Verifique suas credenciais e tente novamente.',
      },
    );

    putUserData(userData);
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="Logo do DevBurger" />
      </LeftContainer>
      <RightContainer>
        <Title>
          <span>Olá,</span> seja bem vindo ao <span>DevBurger</span>,
          <br />
          <span>Acesse</span> com seu
          <span> Login e senha.</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input
              type="email"
              placeholder="Digite seu email"
              {...register('email')}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              {...register('password')}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </InputContainer>
          <Button type="submit">Entrar</Button>
        </Form>
        <p>
          Não tem conta? <Link to="/cadastro">Cadastre-se</Link>
        </p>
      </RightContainer>
    </Container>
  );
}
