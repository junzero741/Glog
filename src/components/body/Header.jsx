import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderStyle>
        <div>this is header.</div>
        </HeaderStyle>
    )
}

export default Header;


const HeaderStyle = styled.div`
    background-color: orange;
`