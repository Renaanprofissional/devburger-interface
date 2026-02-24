import styled from 'styled-components';
import BackgroudLogin from '../../assets/bg.jpg';
import Backgroud from '../../assets/bg2.png';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const LeftContainer = styled.div`
    background: url('${BackgroudLogin}');
    background-size: cover;
    background-position: center;

    width: 100%;
    height: 100%;
    max-width: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 80%;
    }
`;

export const RightContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;
    height: 100%;
    max-width: 50%;

    background: url('${Backgroud}');
    background-size: cover;
    background-position: center;
    background-color: #1e1e1e;

    p{
       color: #fff;
       font-size: 18px;
       font-weight: 800;

       a{
        color: #9758a6;
        text-decoration: underline;
       }
    }
`;

export const Title = styled.h2`
  font-family: "Road Rage", sans-serif;
  font-size: 40px;
  color: #fff;

  span {
    color: #9758a6;
  }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    input {
        width: 100%;
        border: none;
        height: 52px;
        border-radius: 5px;
        padding: 0 16px;
    }

    label {
        font-size: 18px;
        font-weight: 600;
        color: #fff;
    }

`;

export const Button = styled.button``;
