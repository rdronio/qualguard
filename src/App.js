import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

import "semantic-ui-css/semantic.min.css";

import Home from "./components/Home";
import About from "./components/About";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
