import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from "./Store/store";
import Routes from "./Routes";

function App(props) {
  return (
    <Provider store={configureStore()}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
