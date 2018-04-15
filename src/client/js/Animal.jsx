// Animal.jsx
import React from 'react';
import PropTypes from 'prop-types';

class Animal extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line no-console
    console.log('componentDidMount()');
  }
  render() {
    const { species } = this.props;
    return <div className='main'>
      {species}
    </div>;
  }
}

Animal.propTypes = {
  species: PropTypes.string,
};

export default Animal;
