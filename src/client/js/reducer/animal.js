// animal.js
'use strict';
import { ADD_ANIMAL } from '../constant.js';

const initialState = {
  dog: [
    {
      species: 'dog',
      color: 'brown',
    },
    {
      species: 'dog',
      color: 'white',
    },
  ],
  cat: [
    {
      species: 'cat',
      color: 'flower',
    },
    {
      species: 'cat',
      color: 'black',
    },
  ],
};

export const animal = (state = initialState, action) => {
  switch(action.type) {
  case ADD_ANIMAL:
    return {
      ...state,
      [action.payload.species]: [
        ...state[action.payload.species],
        action.payload,
      ],
    };
  default:
    return state;
  }
};

export default animal;
