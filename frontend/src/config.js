// graphql api url
// "http://localhost:8080" is the original dev enpoint
// based on whether user is using docker or podman
let usingDocker = process.env.HOME === "/home/node";
let dev = usingDocker ? "http://wp-headless:8080" : "http://localhost:8080";

let prod = "https://wordpress.jthompsonarch.com";
let url = process.env.NODE_ENV === "development" ? dev : prod;

const Config = {
	baseUrl: url,
	gqlUrl: `${url}/graphql`,
};

export default Config;
