import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";

import Amplify, { Auth } from 'aws-amplify';
// import awsconfig from './aws-exports';

import { configureStore } from 'redux-base/configureStore';
import { AppRootComponent } from 'AppRootComponent';
import * as serviceWorkerRegistration from 'serviceWorkerRegistration';
import reportWebVitals from 'reportWebVitals';
import 'antd/dist/antd.css';
import 'index.css';

Amplify.configure({
  Auth: {

    // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
    identityPoolId: 'eu-west-1:782b7fe1-3fd9-4c30-b7a4-85c2d3e52971',

    // REQUIRED - Amazon Cognito Region
    region: 'eu-west-1',

    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'eu-west-1_jsLcq41yr',

    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: '1gsvu725hns9kr7cdros3dne86',
  },
});

const history = createBrowserHistory();
const store = configureStore(history);

export type RootState = ReturnType<typeof store.getState>;

ReactDOM.render(
  <StrictMode>
    <AppRootComponent
      history={history}
      store={store}
    />
  </StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
