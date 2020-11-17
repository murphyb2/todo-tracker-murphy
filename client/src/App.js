import React from "react";
import { GlobalProvider } from "./context/GlobalState";

import AppRouter from "./routers/AppRouter";

import "./App.css";

const App = () => {
  return (
    <GlobalProvider>
      <AppRouter />
    </GlobalProvider>
  );
};

export default App;
