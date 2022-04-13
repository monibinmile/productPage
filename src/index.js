import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import { store } from '../src/store/store'
import { Provider } from 'react-redux'
// import * as serviceWorker from './serviceWorker';
ReactDOM.hydrate(
  <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
 
);
// serviceWorker.unregister();