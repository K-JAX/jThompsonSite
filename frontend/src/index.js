const path = require('path');
const express = require('express')
const app = express()
const { renderToString } = require("react-dom/server");
const port = 8080
// import './js/components/Form';
const SSR = require("./js/components/Form");
app.get("/", (req, res) =>
  res.status(200).send(renderMarkup(renderToString(SSR)))
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

function renderMarkup(html) {
    return `<!DOCTYPE html>
  <html>
    <head><title>SSR Demo</title><meta charset="utf-8" /></head>
    <body>
      <div id="app">${html}</div>
      <script src="./main.js"></script>
    </body>
  </html>`;
  }