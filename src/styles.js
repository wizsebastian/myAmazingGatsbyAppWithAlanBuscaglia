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

export const CharacterCard = styled.div`
box-shadow: 8px 9px 20px 0px #8ea048;
border-radius: 10px;
padding: 5px;
margin: 10px;
/* text-align: center; */
width: 100%;
max-width: 400px;
`

export const CharacterName = styled.h3`
font-size: 20px;
font-family: "Get Schwifty";
`

export const CharacterData = styled.p`
font-family: sans-serif;
font-size: 20px;
-webkit-text-stroke: 1px #cdd917;
color: #00AFCD;

`

export const CharacterImage = styled.div`
margin-left: auto;
margin-right: auto;
img{
    display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
`