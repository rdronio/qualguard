import React from "react";
import "./App.css";

import "semantic-ui-css/semantic.min.css";

import Header from "./components/header/header";
import Services from "./components/services/services";
import Customers from "./components/customers/customers";

function App() {
  return (
    <div>
      <Header />
      <Services />
      <Customers />
    </div>
  );
}

export default App;
