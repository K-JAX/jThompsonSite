import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { BrowserRouter as Router } from "react-router-dom";
import { createHttpLink } from "apollo-link-http";

import App from "./components/App";
import Config from "./config";
// Bootstrap
// import "bootstrap/dist/css/bootstrap.min.css";

// Apollo GraphQL client
const client = new ApolloClient({
	link: createHttpLink({
		uri: Config.gqlUrl,
	}),
	cache: new InMemoryCache(),
});

function waitForWebfonts(fonts, callback) {
	var loadedFonts = 0;
	for (var i = 0, l = fonts.length; i < l; ++i) {
		(function (font) {
			var node = document.createElement("span");
			// Characters that vary significantly among different fonts
			node.innerHTML = "giItT1WQy@!-/#";
			// Visible - so we can measure it - but not on the screen
			node.style.position = "absolute";
			node.style.left = "-10000px";
			node.style.top = "-10000px";
			// Large font size makes even subtle changes obvious
			node.style.fontSize = "300px";
			// Reset any font properties
			node.style.fontFamily = "sans-serif";
			node.style.fontVariant = "normal";
			node.style.fontStyle = "normal";
			node.style.fontWeight = "normal";
			node.style.letterSpacing = "0";
			document.body.appendChild(node);

			// Remember width with no applied web font
			var width = node.offsetWidth;

			node.style.fontFamily = font;

			var interval;
			function checkFont() {
				// Compare current width with original width
				if (node && node.offsetWidth != width) {
					++loadedFonts;
					node.parentNode.removeChild(node);
					node = null;
				}

				// If all fonts have been loaded
				if (loadedFonts >= fonts.length) {
					if (interval) {
						clearInterval(interval);
					}
					if (loadedFonts == fonts.length) {
						callback();
						return true;
					}
				}
			}

			if (!checkFont()) {
				interval = setInterval(checkFont, 50);
			}
		})(fonts[i]);
	}
}

waitForWebfonts(["scribble hays"], function () {
	// if (document.fonts.check("1em Roboto")) {
	// }
	ReactDOM.render(
		<React.Suspense fallback={<span>Loading</span>}>
			<Router>
				<ApolloProvider client={client}>
					<App />
				</ApolloProvider>
			</Router>
		</React.Suspense>,
		document.getElementById("root")
	);
});
