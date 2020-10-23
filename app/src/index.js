
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import * as serviceWorker from './serviceWorker';


import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss?v1.1.0";

// Redux setup
import storeFactory from "./utils/store/Store";

import { HomeLayout } from './layouts';



const hist = createBrowserHistory();

const initialState = localStorage["redux-store"]
  ? JSON.parse(localStorage["redux-store"])
  : {};

const store = storeFactory(initialState);

const saveState = () => {
  const state = JSON.stringify(store.getState());
  localStorage["redux-store"] = state;
};

store.subscribe(saveState);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={hist}>
      <Switch>
        <Route path="/" exact render={props => <HomeLayout {...props} />} />
        {/* <Route
        path="/landing-page"
        exact
        render={props => <Landing {...props} />}
      />
      <Route path="/login-page" exact render={props => <Login {...props} />} />
      <Route
        path="/profile-page"
        exact
        render={props => <Profile {...props} />}
      />
      <Route
        path="/register-page"
        exact
        render={props => <Register {...props} />}
      /> */}
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
