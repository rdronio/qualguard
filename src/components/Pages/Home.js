import React from "react";
import "semantic-ui-css/semantic.min.css";

import Header from "../Global/header";
import Showcase from "../Home/showcase";
import Services from "../Home/services";
import Customers from "../Home/customers";
import Footer from "../Global/footer";

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
