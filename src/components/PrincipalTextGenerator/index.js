import React from 'react';
import { PrincipalTextContainer } from './styles.js';

const PrincipalTextGenerator = (props) => {
  return <PrincipalTextContainer>{props.text}</PrincipalTextContainer>;
};

export default PrincipalTextGenerator;
