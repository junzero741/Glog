import React from 'react';
import styled from 'styled-components';
import { Link} from 'react-router-dom';

const Header = () => {
    return (
        <HeaderLayout>
            <Link to ="/">Glog</Link>
            <Link to ="/about">about</Link>
            <Link to ="/login">login</Link>
        </HeaderLayout>
    )
}


export default Header;


const HeaderLayout = styled.div`
    display: flex;
    justify-content: space-between;
`