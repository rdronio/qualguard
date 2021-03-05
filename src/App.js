import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import "./App.css";

import "semantic-ui-css/semantic.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from "./components/Pages/Home";
import Products from "./components/Pages/Products";
import About from "./components/Pages/About";

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        {/* <Route path="/home" exact component={Home}></Route> */}
        <Route exact path="/products" component={Products}></Route>
        <Route exact path="/about" component={About}></Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
