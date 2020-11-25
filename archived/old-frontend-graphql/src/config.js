// graphql api url
let url = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/graphql' : 'https://degrawanddehaan.wordtestdomain.com/graphql';
// let url = 'http://localhost:8080/graphql';
// if(process.env.NODE_ENV === 'development'){
//   url = 'https://localhost:8080.com/graphql';
// }else{
//   url = 'https://degrawanddehaan.wordtestdomain.com/graphql';
  
// }


// If we're running on Docker, use the WordPress container hostname instead of localhost.
if (process.env.HOME === '/home/node') {
  url = 'http://wp-headless:8080/graphql';
}
const Config = {
  gqlUrl: url,
};

export default Config;
