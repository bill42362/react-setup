// Animals.jsx
'use strict';
import React from 'react';
import PropTypes from 'prop-types';

import Animal from './Animal.jsx';

class Animals extends React.Component {
  render() {
    const { species, animals, addAnimal } = this.props;
    return <div className='animals'>
      <div className='animals-species'>{species}</div>
      <div
        className='animals-add-animal-button'
        role='button' onClick={addAnimal}
      >Add animal</div>
      <ul className='animal-list'>
        {animals.map((animal, index) => {
          return <Animal color={animal.color} key={index} />;
        })}
      </ul>
    </div>;
  }
}

Animals.propTypes = {
  species: PropTypes.string,
  animals: PropTypes.array,
  addAnimal: PropTypes.func,
};

export default Animals;
