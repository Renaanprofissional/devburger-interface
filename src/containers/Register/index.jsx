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
  Link
} from './styles';

import { Button } from '../../components/Button';
import Logo from '../../assets/logo.png';
import { api } from '../../services/api';

export function Register() {
  const navigate = useNavigate();

  const schema = yup
    .object({
      name: yup.string().required('O nome é obrigatório'),
      email: yup
        .string()
        .email('Digite um email válido')
        .required('O email é obrigatório'),
      password: yup
        .string()
        .min(6, 'A senha deve ter no mínimo 6 caracteres')
        .required('A senha é obrigatória'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
        .required('A confirmação de senha é obrigatória'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const onSubmit = async (data) => {
    try {
      const { status } = await api.post(
        '/users',
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        },
      );

      if (status === 200 || status === 201) {
        setTimeout(() => {
          navigate('/login');
        }, 2000);
        toast.success('Conta criada com sucesso! Redirecionando para login...');
      } else if (status === 409 || status === 400) {
        toast.error('Email já cadastrado. Por favor, use outro email ou faça login.');
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error(
        'Falha no sistema. Por favor, tente novamente mais tarde.',
      );
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="Logo do DevBurger" />
      </LeftContainer>
      <RightContainer>
        <Title>Criar Conta</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Name</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              {...register('name')}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </InputContainer>

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

          <InputContainer>
            <label>Confirmação de Senha</label>
            <input
              type="password"
              placeholder="Confirme sua senha"
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
          </InputContainer>
          <Button type="submit">Criar conta</Button>
        </Form>
        <p>
          Já possui conta? <Link to="/login">Clique aqui</Link>
        </p>
      </RightContainer>
    </Container>
  );
}
