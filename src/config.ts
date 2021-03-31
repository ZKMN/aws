const commonConfig = {
  development: { apiUrl: 'https://6hsduhodf6.execute-api.eu-west-1.amazonaws.com/test' },
  test: { apiUrl: process.env.REACT_APP_API_URL },
  staging: { apiUrl: process.env.REACT_APP_API_URL },
  production: { apiUrl: process.env.REACT_APP_API_URL },
}[process.env.NODE_ENV || 'development'];

export const config = {
  api: {
    timeout: 30000,
    url: commonConfig.apiUrl,
  },
};
