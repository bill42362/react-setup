// renderApp.js
'use strict';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../../src/client/js/App.jsx';

export const renderApp
  = ({ request, response, context }) => ReactDOMServer.renderToString(
    <StaticRouter location={request.url} context={context}>
      <App content='Hello App' />
    </StaticRouter>
  );

export default renderApp;
