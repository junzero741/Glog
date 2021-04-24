import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import Topic from 'pages/Topic';
import styled from 'styled-components';

const Topics = () => {
  let match = useRouteMatch();

  return (
    <TopicsStyle>
      <Router>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>

        <Switch>
          <Route path={`${match.path}/:topicId`}>
            <Topic />
          </Route>
          <Route path={match.path}>
            <h3>Please select a topic.</h3>
          </Route>
        </Switch>
      </Router>
    </TopicsStyle>
  );
};

export default Topics;

const TopicsStyle = styled.div``;
