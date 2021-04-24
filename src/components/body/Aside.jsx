import React from 'react';
import styled from 'styled-components';

const Aside = () => {
    return (
        <AsideStyle>
        <div>this is aside.</div>
        </AsideStyle>
    )
}

export default Aside;

const AsideStyle = styled.div`
    background-color: #2c8d75;
`