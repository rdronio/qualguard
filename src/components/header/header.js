import React, { Component } from "react";
import { Menu, Container, Image, Segment } from "semantic-ui-react";

import logo from "./images/qualguard-logo.png";

// import bg_landingpage from "./images/bg_landingpage.png";
import bg_landingpage from "./images/bg_landingpage2.png";

export default class Header extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu secondary>
          <Container>
            <Menu.Item>
              <Image src={logo} size="medium" className="header_logo" />
            </Menu.Item>

            <Menu.Menu className="right_header" position="right">
              <Menu.Item
                name="editorials"
                active={activeItem === "editorials"}
                onClick={this.handleItemClick}
              >
                Home
              </Menu.Item>

              <Menu.Item
                name="reviews"
                active={activeItem === "reviews"}
                onClick={this.handleItemClick}
              >
                Products
              </Menu.Item>

              <Menu.Item
                name="upcomingEvents"
                active={activeItem === "upcomingEvents"}
                onClick={this.handleItemClick}
              >
                About Us
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>

        <Segment
          className="showcase"
          vertical
          textAlign="center"
          style={{
            backgroundImage: `url(${bg_landingpage})`
          }}
        >
          <Container text textAlign="left" className="showcase-content">
            <div className="showcase-content-subheading">
              Lorem ipsum dolor sit amet
            </div>
            <div className="showcase-content-heading">
              Lorem ipsum dolor sit
            </div>
            <div className="showcase-content-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="showcase-content-button">
              <div className="showcase-content-button-leftcontainer">
                <a>View Products</a>
              </div>
              <div className="showcase-content-button-rightcontainer">
                <a>Read More</a>
              </div>
            </div>
          </Container>
        </Segment>
      </div>
    );
  }
}
