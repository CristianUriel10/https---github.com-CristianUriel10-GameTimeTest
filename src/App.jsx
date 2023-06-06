// Libraries.
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

// Global Shared Components.
import Routes from "./Routes/Routes";

// Styles.
import "./index.css";
import "./Styles/stylesGlobal.scss";

// Redux.
import configureStore from "./Redux/Store";

const App = () => (
  <Provider store={configureStore.store}>
    <PersistGate persistor={configureStore.persistor}>
      <Routes />
    </PersistGate>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("app"));
