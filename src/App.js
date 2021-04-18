import { createGlobalStyle } from 'styled-components';
import Header from 'components/Header';
import Nav from 'components/Nav';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Nav />
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
