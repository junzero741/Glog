import React from 'react';
import styled from 'styled-components';

const Article = ({title, description, path}) => {



    return(
        <ArticleStyle>
        <h3>{title}</h3>
        <p>{description}</p>
        </ArticleStyle>
    )
}

export default Article;

const ArticleStyle = styled.div`
    background-color: #4270d3;
`