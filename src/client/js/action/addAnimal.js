// addAnimal.js
'use strict';
import { ADD_ANIMAL } from '../constant.js';

const colors = ['brown', 'orange', 'black', 'white', 'golden'];

export const addAnimal = ({ species }) => {
  const animal = {
    color: colors[Math.floor(Math.random()*6)],
    species,
  };
  return {type: ADD_ANIMAL, payload: animal};
};

export default addAnimal;
