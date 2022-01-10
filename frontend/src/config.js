// graphql api url
// "http://localhost:8080" is the original dev enpoint
// based on whether user is using docker or podman
let usingDocker = process.env.HOME === "/home/node";
let localAddress =
	window.location.hostname === "localhost"
		? "http://localhost:8080"
		: "http://192.168.86.33:8080"; // network for checking changes on mobile
let dev = usingDocker ? "http://wp-headless:8080" : localAddress;

let prod = "https://wp.jthompsonarch.com";
let url = process.env.NODE_ENV === "development" ? dev : prod;

const Config = {
	baseUrl: url,
	gqlUrl: `${url}/graphql`,
	hostname: window.location.hostname,
};

export default Config;
