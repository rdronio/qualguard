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
              <Link to="/">
                <Menu.Item
                  name="home"
                  active={activeItem === "home"}
                  onClick={this.handleItemClick}
                >
                  Home
                  {/* <Link to="/">Home</Link> */}
                </Menu.Item>
              </Link>

              <Link to="/products">
                <Menu.Item
                  name="products"
                  active={activeItem === "products"}
                  onClick={this.handleItemClick}
                >
                  Products
                  {/* <Link to="/products">Products</Link> */}
                </Menu.Item>
              </Link>

              <Link to="/about">
                <Menu.Item
                  name="about"
                  active={activeItem === "about"}
                  onClick={this.handleItemClick}
                >
                  About
                  {/* <Link to="/about">About</Link> */}
                </Menu.Item>
              </Link>
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
    );
  }
}
