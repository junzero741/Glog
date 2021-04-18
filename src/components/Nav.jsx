import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import About from 'pages/About';
import Posts from 'pages/Posts';
import Home from 'pages/Home';
import Etc from 'pages/Etc';

const Nav = () => {
  return (
    <NavStyle>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/etc">Etc</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/etc">
            <Etc />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </NavStyle>
  );
};

export default Nav;

const NavStyle = styled.div`
  ul {
    display: flex;
    justify-content: space-around;
  }

  li {
    display: inline;
  }
`;
