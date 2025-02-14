import React from 'react';
import Confetti from 'react-confetti';

const ConfettiEffect = ({ isActive }) => {
  return isActive ? <Confetti /> : null;
};

export default ConfettiEffect;
