import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import theme from 'styles/theme';
import Client from './Client';


const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Client />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
