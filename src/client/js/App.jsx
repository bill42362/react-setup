// App.jsx
import React from 'react';
import PropTypes from 'prop-types';

const App = (props) => {
  const { content } = props;
  return <div className='app'>
    {content}
  </div>;
};

App.propTypes = {
  content: PropTypes.string,
};

export default App;
