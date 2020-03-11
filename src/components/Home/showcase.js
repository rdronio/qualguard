import React, { Component } from "react";
import { Container, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

// import bg_landingpage from "./images/bg_landingpage.png";
import bg_landingpage from "../images/bg_landingpage2.png";

export default class Showcase extends Component {
  render() {
    return (
      <Segment
        className="showcase"
        vertical
        textAlign="center"
        style={{
          backgroundImage: `url(${bg_landingpage})`
        }}
      >
        <Container text textAlign="left" className="showcase-content">
          {/* <div className="showcase-content-subheading">Why QualGuard?</div> */}
          <div className="showcase-content-heading">
            Security <br /> Integrity <br /> Reliability <br />
          </div>
          <div className="showcase-content-desc">
            PROVIDING PROTECTION & INNOVATION
          </div>
          <div className="showcase-content-button">
            <Link to="/products">
              <div className="showcase-content-button-leftcontainer">
                <a>View Products</a>
              </div>
            </Link>
            <div className="showcase-content-button-rightcontainer">
              <a>Read More</a>
            </div>
          </div>
        </Container>
      </Segment>
    );
  }
}
