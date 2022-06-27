import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./GlobalStyles";
import store from "./redux/store"
import {Provider} from "react-redux"

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
  document.getElementById("root")
);

