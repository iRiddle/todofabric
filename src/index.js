import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { Customizer, mergeStyles } from "office-ui-fabric-react";
import { FluentCustomizations } from "@uifabric/fluent-theme";
import { initializeIcons } from "@uifabric/icons";

import 'react-notifications/lib/notifications.css';

import store from "./store";

import App from "./App";

import * as serviceWorker from "./serviceWorker";
import "./index.scss";

mergeStyles({
  selectors: {
    ":global(body), :global(html), :global(#root)": {
      margin: 0,
      padding: 0,
      height: "100vh"
    }
  }
});

initializeIcons();

ReactDOM.render(
  <Provider store={store}>
    <Customizer {...FluentCustomizations}>
      <App />
    </Customizer>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
