import MainPage from 'pages/MainPage';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

const Client = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path={'/'} component={MainPage} exact />
        </Switch>
      </Router>
    </div>
  );
};
export default Client;
