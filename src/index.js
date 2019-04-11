import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import LinkListContainer from './containers/LinkListContainer';
import AddLinkContainer from './containers/AddLinkContainer';

import './common/styles/all.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <main className='container'>
        <div className='row'>
          <Header />
        </div>
        <div className='row'>
          <Route exact path='/' component={LinkListContainer} />
          <Route exact path='/addLink' component={AddLinkContainer} />
        </div>
      </main>
    </Router>
  </Provider>,
  document.getElementById('root')
);
