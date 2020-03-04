import React from "react";

import "semantic-ui-css/semantic.min.css";

import Header from "../Global/header";
import Showcase from "../About/showcase";
import Content from "../About/content";
import Footer from "../Global/footer";

function About() {
  return (
    <div>
      <Header />
      <Showcase />
      <Content />
      <Footer />
    </div>
  );
}

export default About;
