import React, {useState} from 'react';
import styled from 'styled-components';
import Article from 'components/body/Articles/Article';

const Articles = () => {

    const [articleDataList, setArticleDataList] = useState(mockData);

    const articleList = articleDataList.map((article) => {
        return <Article key={article.id} title={article.title} description= {article.description} path={article.path} />
    })

    return(
        <ArticlesStyle>
            {articleList}
        </ArticlesStyle>
    )
}

export default Articles;

const ArticlesStyle = styled.div`
    background-color: #9a75ff;
`


const mockData = [
    {
        id: 0,
        title: "첫 게시글",
        description: "리액트에 입문하면서 느낀 점",
        path: '/'
    },
    {
        id: 1,
        title: "두 번 째 게시글",
        description: "블로그를 만들어보면서 느낀 점",
        path: '/'
    },
    {
        id: 2,
        title: "세 번 째 게시글",
        description: "코드스쿼드 프로젝트 회고",
        path: '/'
    }
]