import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import allReducers from "./reducers";
import { Provider } from "react-redux";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  allReducers,
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
