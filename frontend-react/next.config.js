/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    env: {
        REACT_APP_CLIENT_ID: 'Ov23ctbV5RpBa3cLNeqe',
        REACT_APP_CLIENT_SECRET: '1d7698ccd4f4295003493202b6ec6986fe623480',
        REACT_APP_REDIRECT_URI: 'http://localhost:3000/login',
        REACT_APP_PROXY_URL: 'http://localhost:5000/authenticate',
        SERVER_PORT: '5000',
    },
}
   
module.exports = nextConfig