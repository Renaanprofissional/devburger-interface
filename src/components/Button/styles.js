import styled from "styled-components";

export const ContainerButton = styled.button`
    width: 100%;
    height: 52px;
    border: none;
    border-radius: 8px;
    background-color: #9758A6;
    font-family: "Road Rage", sans-serif;
    font-size: 30px;
    color: #fff;

    &:hover {
        background-color: #6f3576;
        border: 1px dashed #fff;
        transition: all 0.6s ease;
    }
`