import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Header from 'components/Header';
import LoginPage from 'pages/LoginPage';
import AboutPage from 'pages/AboutPage';
import PostPage from 'pages/PostPage';
import MainPage from 'pages/MainPage';


const Client = () => {
  return (
    <>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/posts/:id" component={PostPage} />
        </Switch>
    </>
    );
};
export default Client;
