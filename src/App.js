import React from "react";
import Header from "./components/Header";
import { HashRouter } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <HashRouter>
      <Header />
      {routes}
    </HashRouter>
  );
}

export default App;
