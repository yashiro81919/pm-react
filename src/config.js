const prod = {
    keyName: 'X-API-KEY',
    baseURL: 'https://shitianyu.xyz/api',
    cryptoEndpoint: '/cryptos',
    keyEndpoint: '/keys',
};

const dev = {
    keyName: 'X-API-KEY',
    baseURL: 'http://localhost:60001/api',
    cryptoEndpoint: '/cryptos',
    keyEndpoint: '/keys',
};

const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default config;