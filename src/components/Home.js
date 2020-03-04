import React from "react";

import "semantic-ui-css/semantic.min.css";

import Header from "./header/header";
import Showcase from "./showcase/showcase";
import Services from "./services/services";
import Customers from "./customers/customers";
import Footer from "./footer/footer";

function Home() {
  return (
    <div>
      <Header />
      <Showcase />
      <Services />
      <Customers />
      <Footer />
    </div>
  );
}

export default Home;
