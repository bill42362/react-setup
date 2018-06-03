// index.js
import Express from 'express';
import EnvConfig from '../../config.json';
import renderHtml from './renderHtml.js';
import compileJs from './compileJs.js';

const nodeEnv = process.env.NODE_ENV || EnvConfig.NODE_ENV || 'production';
const isProd = 'production' === nodeEnv;
const PORT = process.env.PORT || 3000;

const server = new Express();

if(!isProd) {
  const hotReloader = require('./hotReload.js');
  server.use(hotReloader.webpackDevMiddleware);
  server.use(hotReloader.webpackHotMiddleware);
}

//server.use('/js/', Express.static(`${__dirname}/../../dist/client/js/`));
//server.use('/css/', Express.static(`${__dirname}/../../src/client/css/`));

if(EnvConfig.SERVER_SIDE_RENDER) {
  compileJs()
    .then(({ renderApp, createInitialStore }) => {
      server.get('/*', (request, response) => {
        const context = {};
        const store = createInitialStore();
        const app = renderApp({ request, response, context, store });
        if(context.url) {
          response.writeHead(301, {Location: context.url});
          response.end();
        } else {
          const preloadedState = store.getState();
          response.send(renderHtml({
            request, response, app, preloadedState
          }));
        }
      });
      server.listen(PORT, () => {
        console.log(`Server is listening ${PORT} port.`);
      });
    });
} else {
  server.get('/*', (request, response) => {
    response.send(renderHtml({ request, response }));
  });

  server.listen(PORT, () => {
    console.log(`Server is listening ${PORT} port.`);
  });
}
