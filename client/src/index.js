import React from 'react';
import { render } from "react-dom";
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Provider } from 'react-redux';
import { AuthProvider } from './AuthContext';
import {legacy_createStore as createStore, applyMiddleware, compose} from 'redux'
import thunk  from 'redux-thunk'
import reducers from './reducers/index'

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = document.getElementById('root');
render(
  <React.StrictMode>
  <Provider store={store}>
   <AuthProvider children = { <App />}/>
   
   
  </Provider>
  </React.StrictMode>, root);
 

// import React from "react";
// import { render } from "react-dom";
// import "./index.css";
// import App from "./App";
// const root = document.getElementById("root");
//     render(<App />, root);