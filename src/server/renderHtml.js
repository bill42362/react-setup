// renderHtml.js

export const renderHtml = ({
  request, response,
  app = '', preloadedState,
}) => `
  <!doctype html>
  <html>
  <head>
    <title>react-setup</title>
  </head>
  <body>
    <div id="app-root">${app}</div>
    <script>
      window.__PRELOADED_STATE__ = ${
        JSON.stringify(preloadedState).replace(/</g, '\\u003c')
      }
    </script>
    <script type="text/javascript" src="/js/bundle.js"></script>
  </body>
  </html>
`;

export default renderHtml;
