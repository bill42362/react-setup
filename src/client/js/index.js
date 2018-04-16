// index.js
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import '../css/index.css';

// eslint-disable-next-line no-undef
if(process.env.SERVER_SIDE_RENDER) {
  ReactDOM.hydrate(
    <BrowserRouter>
      <App content='Hello App' />
    </BrowserRouter>,
    document.getElementById('app-root')
  );
} else {
  ReactDOM.render(
    <BrowserRouter>
      <App content='Hello App' />
    </BrowserRouter>,
    document.getElementById('app-root')
  );
}
