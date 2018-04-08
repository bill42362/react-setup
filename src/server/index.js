// index.js
import Express from 'express';
import EnvConfig from '../../config.json';

const nodeEnv = process.env.NODE_ENV || EnvConfig.NODE_ENV || 'production';
const isProd = 'production' === nodeEnv;
const PORT = process.env.PORT || 3000;

const server = new Express();

const renderHtml = (arg) => `
  <!doctype html>
  <html>
  <head>
    <title>react-setup</title>
  </head>
  <body>
    React-setup ${arg}
    <script type="text/javascript" src="/js/bundle.js"></script>
  </body>
  </html>
`;

if(!isProd) {
  const hotReloader = require('./hotReload.js');
  server.use(hotReloader.webpackDevMiddleware);
  server.use(hotReloader.webpackHotMiddleware);
}

//server.use('/js/', Express.static(`${__dirname}/../../dist/client/js/`));
//server.use('/css/', Express.static(`${__dirname}/../../src/client/css/`));

server.get('/', (request, response) => {
  response.send(renderHtml(JSON.stringify(request.params)));
});
server.get('/:path', (request, response) => {
  response.send(renderHtml(JSON.stringify(request.params)));
});

server.listen(PORT, () => {
  console.log(`Server is listening ${PORT} port.`);
});
