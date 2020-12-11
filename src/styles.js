import styled from 'styled-components';
import BackgroundImage from './assets/background.png';

export const Wrapper = styled.div`
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-size: cover;
`;

export const PrimaryButton = styled.button`
  border: solid 2px #cdd917;
  background: #00afcd;
  border-radius: 10px;
  height: 30px;
  width: 30%;
  font-family: 'Get Schwifty';
  /* padding: 10px; */
`;
