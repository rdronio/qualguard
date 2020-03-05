import React from "react";

import "semantic-ui-css/semantic.min.css";

import Header from "../Global/header";
import Showcase from "../Products/showcase";
import Content from "../Products/content";
// import Categories from "../Products/categories";
import HeadProtection from "../Products/categories/headprotection";
import Footer from "../Global/footer";

function Products() {
  return (
    <div>
      <Header />
      <Showcase />
      <Content />
      <Footer />
    </div>
  );
}

export default Products;
