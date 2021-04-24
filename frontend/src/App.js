import { createGlobalStyle } from 'styled-components';
import Header from 'components/Header';
import Nav from 'components/Nav';
import Body from 'components/body/Body';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Nav />
      <Body />
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`



  ul {
    list-style: none;
  }

   a{
    text-decoration: none;
   }
`;
