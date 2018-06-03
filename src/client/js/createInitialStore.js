// createInitialStore.js
'use strict';
import { createStore } from 'redux';
import animal from './reducer/animal.js';

export const createInitialStore = () => {
  return createStore(animal);
};

export default createInitialStore;
