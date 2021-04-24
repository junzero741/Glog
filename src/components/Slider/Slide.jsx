import React from 'react';
import styled from 'styled-components';

const Slide = ({ image }) => {
  return (
    <SlideStyle>
      <IMG src={image} />
    </SlideStyle>
  );
};

export default Slide;

const SlideStyle = styled.div`
  border: 1px solid red;
`;

const IMG = styled.img`
  width: 100%;
  height: 70vh;
`;
