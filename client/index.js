import React from 'react';
import ReactDOM from 'react-dom';
import AppolloClient, { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import SongList from './components/SongList';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
const client = new ApolloClient({})
import App from './components/App'
import SongCreate from './components/SongCreate'

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList}/>
          <Route path="song/new" component={SongCreate}/> 
        </Route>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
