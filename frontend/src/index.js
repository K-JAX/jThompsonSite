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
import "bootstrap/dist/css/bootstrap.min.css";

// Apollo GraphQL client
const client = new ApolloClient({
	link: createHttpLink({
		uri: Config.gqlUrl,
	}),
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<React.Suspense fallback={<span></span>}>
		<Router>
			<ApolloProvider client={client}>
				<App />
			</ApolloProvider>
		</Router>
	</React.Suspense>,
	document.getElementById("root")
);