// index.js
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import animal from './reducer/animal.js';
import App from './component/App.jsx';

import '../css/index.css';

const store = createStore(animal);

// eslint-disable-next-line no-undef
if(process.env.SERVER_SIDE_RENDER) {
  ReactDOM.hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <App content='Hello App' />
      </BrowserRouter>
    </Provider>,
    document.getElementById('app-root')
  );
} else {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App content='Hello App' />
      </BrowserRouter>
    </Provider>,
    document.getElementById('app-root')
  );
}
