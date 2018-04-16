// renderHtml.js

export const renderHtml = ({ request, response, app = '' }) => `
  <!doctype html>
  <html>
  <head>
    <title>react-setup</title>
  </head>
  <body>
    <div id="app-root">${app}</div>
    <script type="text/javascript" src="/js/bundle.js"></script>
  </body>
  </html>
`;

export default renderHtml;
