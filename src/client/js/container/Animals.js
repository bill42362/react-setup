// Animals.js
'use strict';
import { connect } from 'react-redux';
import addAnimal from '../action/addAnimal.js';
import Animals from '../component/Animals.jsx';

const mapStateToProps = (state, ownPros) => {
  const { species } = ownPros;
  return {
    animals: state[species],
  };
};

const mapDispatchToProps = (dispatch, ownPros) => {
  const { species } = ownPros;
  return {
    addAnimal: () => dispatch(addAnimal({ species })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Animals);
