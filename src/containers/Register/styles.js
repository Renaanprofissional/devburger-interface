import { Link as ReactLink } from 'react-router-dom';
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
       font-family: "Poppins", sans-serif;

       a{
        color: #fff;
        text-decoration: underline;
       }
       a:hover {
        color: #9758a6;
        transition: all 0.6s ease;
       }
    }
`;

export const Title = styled.h2`
  font-family: "Road Rage", sans-serif;
  font-size: 40px;
  color: #9758A6;
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
        font-family: "Poppins", sans-serif;
    }

    p{
        font-size: 14px;
        line-height: 80%;
        color: #cf3057;
        height: 10px;
    }

`;

export const Link = styled(ReactLink)`
    color: #fff;
    text-decoration: underline;
`