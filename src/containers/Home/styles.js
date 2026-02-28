import styled from "styled-components";

import Background from "../../assets/bg2.png"
import BannerHome from "../../assets/banner-home.svg";

export const Banner = styled.div`
  background: url('${BannerHome}');
  background-size: cover;
  background-position: center;
  height: 400px;

  h1{
    font-family: 'Roade Rage', sans-serif;
    font-size: 80px;
    color: #f4f4f4;
    position: absolute;
    right: 20%;
    top: 20%;
  }
  
  `
export const Container = styled.section`
     background: linear-gradient(
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.8)
     ),
     url('${Background}');
     background-size: cover;
     height: 100vh;
`
