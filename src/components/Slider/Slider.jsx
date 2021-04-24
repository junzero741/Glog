import React from 'react';
import styled from 'styled-components';
import Slide from 'components/Slider/Slide';

const Slider = () => {
  return <SliderContainer>Slider CMP</SliderContainer>;
};

export default Slider;

const SliderContainer = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 70vh;
  display: flex;
`;

const images = [];
