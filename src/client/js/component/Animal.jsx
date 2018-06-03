// Animal.jsx
'use strict';
import React from 'react';
import PropTypes from 'prop-types';

class Animal extends React.Component {
  render() {
    const { color } = this.props;
    return <div className='animal'>
      {color}
    </div>;
  }
}

Animal.propTypes = {
  color: PropTypes.string,
};

export default Animal;
