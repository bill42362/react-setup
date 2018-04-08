// index.js
import Express from 'express';

const PORT = process.env.PORT || 3000;

const server = new Express();

const renderHtml = (arg) => `
  <!doctype html>
  <html>
  <head>
    <title>react-setup</title>

    <link rel="stylesheet" href="/css/bundle.css"/>
  </head>
  <body>
    React-setup ${arg}
    <script type="text/javascript" src="/js/bundle.js"></script>
  </body>
  </html>
`;

server.use('/js/', Express.static(`${__dirname}/../../dist/client/`));
server.use('/css/', Express.static(`${__dirname}/../../dist/client/`));
server.use('/fonts/', Express.static(`${__dirname}/../../dist/client/`));
server.use('/img/', Express.static(`${__dirname}/../../dist/client/`));

server.get('/:path', (request, response) => {
  response.send(renderHtml(JSON.stringify(request.params)));
});

server.listen(PORT, () => {
  console.log(`Server is listening ${PORT} port.`);
});
