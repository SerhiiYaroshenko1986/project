import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import { routerMiddleware, ConnectedRouter } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

import createRootReducer from "./components/reducers/index";
import routes from "./components/routes";
import Header from "./components/containers/header";
import Footer from "./components/containers/Footer";

const history = createBrowserHistory();
const middlewares = [thunk, routerMiddleware(history)];
const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Header />
      {routes}
      <Footer />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
