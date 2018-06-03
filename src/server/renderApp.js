// renderApp.js
'use strict';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../../src/client/js/component/App.jsx';

export const renderApp
  = ({
    request, response, context, store
  }) => ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={request.url} context={context}>
        <App content='Hello App' />
      </StaticRouter>
    </Provider>
  );

export default renderApp;
