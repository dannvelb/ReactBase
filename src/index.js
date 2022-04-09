import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppContainer from "./app/app";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store/index";

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
