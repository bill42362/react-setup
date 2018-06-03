// App.jsx
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Main from './Main.jsx';
import Animals from '../container/Animals.js';
import About from './About.jsx';

const App = (props) => {
  const { content } = props;
  return <div className='app'>
    <nav className='app-nav'>
      <ul>
        <li><Link to='/'>Main</Link></li>
        <li><Link to='/dog'>Dog</Link></li>
        <li><Link to='/cat'>Cat</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </nav>
    <div className='app-body'>
      {content}
      <Switch>
        <Route exact path='/' render={Main}/>
        <Route path='/dog' render={() => <Animals species='dog' />}/>
        <Route path='/cat' render={() => <Animals species='cat' />}/>
        <Route path='/about' render={About}/>
        <Route path='/404' render={() => <div>Error</div>}/>
        <Redirect to='/404'/>
      </Switch>
    </div>
  </div>;
};

App.propTypes = {
  content: PropTypes.string,
};

export default hot(module)(App);
