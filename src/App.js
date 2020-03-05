import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

import "semantic-ui-css/semantic.min.css";

import Home from "./components/Pages/Home";
import Products from "./components/Pages/Products";
import About from "./components/Pages/About";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/products" exact component={Products}></Route>
        <Route path="/about" exact component={About}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
