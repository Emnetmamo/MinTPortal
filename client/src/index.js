import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Provider } from 'react-redux';
import {legacy_createStore as createStore, applyMiddleware, compose} from 'redux'
import thunk  from 'redux-thunk'
import reducers from './reducers/index'

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
   
    <App />
 
  </Provider>
  </React.StrictMode>
 
);
