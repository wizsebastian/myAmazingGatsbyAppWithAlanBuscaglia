import styled from "styled-components";
import BackgroundImage from './assets/background.png';

export const Wrapper = styled.div`
height: 100vh;
background-image: url(${BackgroundImage});
background-size: cover;
`

export const PrimaryButton = styled.button`
border: solid 2px #CDD917;
background: #00AFCD;
border-radius: 10px;
height: 30px;
width: 30%;
margin-left: auto;
margin-right: auto;
font-family: "Get Schwifty";
/* padding: 10px; */
`