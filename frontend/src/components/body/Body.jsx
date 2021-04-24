import React from 'react';
import styled from 'styled-components';
import Header from 'components/body/Header'
import Aside from 'components/body/Aside'
import Articles from 'components/body/Articles/Articles'
import Footer from 'components/body/Footer'

const Body = () => {
    return (
        <BodyStyle>
            <Header />
            <Aside />
            <Articles />
            <Footer />
        </BodyStyle>
    )
}

export default Body;

const BodyStyle = styled.div`
    background-color: yellow;  
    margin-left: auto;
    margin-right: auto;
    max-width: 42rem;
    padding: 2.625rem 1.3125rem;
`;