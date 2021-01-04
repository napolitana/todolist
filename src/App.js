import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./store";

import GlobalStyle from "./styles/global";

import Main from "./pages/Main";

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyle />
      <Main />
    </PersistGate>
  </Provider>
);

export default App;
