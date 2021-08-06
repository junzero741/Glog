import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import theme from 'styles/theme';
import Client from './Client';
import AboutPage from 'pages/AboutPage';
import ArticlePage from 'pages/ArticlePage';
import LoginPage from 'pages/LoginPage';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Link to='/about'>about</Link>
        <Link to='/'>home</Link>
        <Link to='/login'>login</Link>
        <Link to='/article'>article</Link>
        <Switch>
          <Route exact path='/' component={Client} />
          <Route path='/about' component={AboutPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/article' component={ArticlePage} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
