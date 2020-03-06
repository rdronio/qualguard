import React, { Component } from "react";
import { Menu, Container, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import logo from "../images/qualguard-logo-with-word.png";

export default class Header extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu secondary>
          <Container className="header_container">
            <Menu.Item>
              <Image src={logo} size="medium" className="header_logo" wrapped />
            </Menu.Item>

            <Menu.Menu className="right_header" position="right">
              <Link to="/home">
                <Menu.Item
                  name="editorials"
                  active={activeItem === "editorials"}
                  onClick={this.handleItemClick}
                >
                  Home
                </Menu.Item>
              </Link>

              <Link to="/products">
                <Menu.Item
                  name="reviews"
                  active={activeItem === "reviews"}
                  onClick={this.handleItemClick}
                >
                  Products
                </Menu.Item>
              </Link>

              <Link to="/about">
                <Menu.Item
                  name="upcomingEvents"
                  active={activeItem === "upcomingEvents"}
                  onClick={this.handleItemClick}
                >
                  About
                </Menu.Item>
              </Link>
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
    );
  }
}
