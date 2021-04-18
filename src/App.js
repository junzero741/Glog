import { createGlobalStyle } from 'styled-components';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams,
// } from 'react-router-dom';
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

// const Topics = () => {
//   let match = useRouteMatch();

//   return (
//     <div>
//       <h2>Topics</h2>
//       <ul>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//         </li>
//       </ul>

//       <Switch>
//         <Route path={`${match.path}/:topicId`}>
//           <Topic />
//         </Route>
//         <Route path={match.path}>
//           <h3>Please select a topic.</h3>
//         </Route>
//       </Switch>
//     </div>
//   );
// };

// const Topic = () => {
//   let { topicId } = useParams();
//   return <h3>Requested topic ID: {topicId}</h3>;
// };

export default App;

const GlobalStyle = createGlobalStyle`
  ul {
    list-style: none;
  }

   a{
    text-decoration: none;
   }
`;
