import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Home from 'pages/Home';
import Posts from 'pages/Posts';

const Header = () => {
  return (
    <HeaderStyle>
      <Router>
        <div>
          <Link to="/">Glog</Link>
        </div>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.div`
  height: 3.5rem;
  background-color: black;
  color: white;
  text-align: center;
  line-height: 3rem;
`;
