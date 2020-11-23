const React = require("react");
const ReactDOM = require("react-dom");
const SSR = <div onClick={() => alert("hello")}>Testing SSR react succeeded</div>;

// Render only in the browser, export otherwise
if (typeof document === "undefined") {
  module.exports = SSR;
} else {
  ReactDOM.hydrate(SSR, document.getElementById("app"));
}