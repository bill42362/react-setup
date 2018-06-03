// index.js
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import createInitialStore from './createInitialStore.js';
import animal from './reducer/animal.js';
import App from './component/App.jsx';

import '../css/index.css';

// eslint-disable-next-line no-undef
if(process.env.SERVER_SIDE_RENDER) {
  const preloadedState = window.__PRELOADED_STATE__;
  delete window.__PRELOADED_STATE__;
  const store = createStore(animal, preloadedState);
  ReactDOM.hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <App content='Hello App' />
      </BrowserRouter>
    </Provider>,
    document.getElementById('app-root')
  );
} else {
  const store = createInitialStore();
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App content='Hello App' />
      </BrowserRouter>
    </Provider>,
    document.getElementById('app-root')
  );
}
