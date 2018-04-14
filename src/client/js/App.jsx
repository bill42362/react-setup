// App.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

const App = (props) => {
  const { content } = props;
  return <div className='app'>
    {content}
  </div>;
};

App.propTypes = {
  content: PropTypes.string,
};

export default hot(module)(App);
