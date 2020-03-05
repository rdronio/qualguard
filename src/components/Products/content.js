import React, { Component } from "react";
import { Container, Segment, Grid, Image } from "semantic-ui-react";
import Slider from "react-slick";

import logo from "../images/qualguard-logo.png";

import HeadProtection from "./categories/headprotection";
import HandProtection from "./categories/handprotection";
import EyeProtection from "./categories/eyeprotection";

export default class Content extends Component {
  state = {
    visible: true,
    whichComponentToShow: "HeadProtection"
  };

  render() {
    const settings = {
      // dots: true,
      // infinite: true,
      // speed: 500,
      // slidesToShow: 3,
      // slidesToScroll: 3,
      // autoplay: true,
      // autoplaySpeed: 5000,

      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    };

    if (this.state.whichComponentToShow === "HeadProtection") {
      return (
        <Segment className="content-product" vertical textAlign="center">
          <Container>
            <Slider {...settings}>
              <div>
                <Grid stackable columns={1}>
                  <Grid.Column
                    mobile={16}
                    tablet={16}
                    computer={16}
                    className="product-content-categories"
                  >
                    <Image
                      src={logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Eye Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "EyeProtection"
                        });
                      }}
                    >
                      Show
                    </button>
                  </Grid.Column>
                </Grid>
              </div>
              <div>
                <Grid stackable columns={1}>
                  <Grid.Column
                    mobile={16}
                    tablet={16}
                    computer={16}
                    className="product-content-categories"
                  >
                    <Image
                      src={logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Head Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HeadProtection"
                        });
                      }}
                    >
                      Show
                    </button>
                  </Grid.Column>
                </Grid>
              </div>
              <div>
                <Grid stackable columns={1}>
                  <Grid.Column
                    mobile={16}
                    tablet={16}
                    computer={16}
                    className="product-content-categories"
                  >
                    <Image
                      src={logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Body Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "BodyProtection"
                        });
                      }}
                    >
                      Show
                    </button>
                  </Grid.Column>
                </Grid>
              </div>
              <div>
                <Grid stackable columns={1}>
                  <Grid.Column
                    mobile={16}
                    tablet={16}
                    computer={16}
                    className="product-content-categories"
                  >
                    <Image
                      src={logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Face Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FaceProtection"
                        });
                      }}
                    >
                      Show
                    </button>
                  </Grid.Column>
                </Grid>
              </div>
              <div>
                <Grid stackable columns={1}>
                  <Grid.Column
                    mobile={16}
                    tablet={16}
                    computer={16}
                    className="product-content-categories"
                  >
                    <Image
                      src={logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Hand Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HandProtection"
                        });
                      }}
                    >
                      Show
                    </button>
                  </Grid.Column>
                </Grid>
              </div>
            </Slider>
            <HeadProtection />
          </Container>
        </Segment>
      );
    } else if (this.state.whichComponentToShow === "EyeProtection") {
      return (
        <Segment className="content-product" vertical textAlign="center">
          <Container>
            <Slider {...settings}>
              <div>
                <Grid stackable columns={1}>
                  <Grid.Column
                    mobile={16}
                    tablet={16}
                    computer={16}
                    className="product-content-categories"
                  >
                    <Image
                      src={logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Eye Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "EyeProtection"
                        });
                      }}
                    >
                      Show
                    </button>
                  </Grid.Column>
                </Grid>
              </div>
              <div>
                <Grid stackable columns={1}>
                  <Grid.Column
                    mobile={16}
                    tablet={16}
                    computer={16}
                    className="product-content-categories"
                  >
                    <Image
                      src={logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Head Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HeadProtection"
                        });
                      }}
                    >
                      Show
                    </button>
                  </Grid.Column>
                </Grid>
              </div>
              <div>
                <Grid stackable columns={1}>
                  <Grid.Column
                    mobile={16}
                    tablet={16}
                    computer={16}
                    className="product-content-categories"
                  >
                    <Image
                      src={logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Body Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "BodyProtection"
                        });
                      }}
                    >
                      Show
                    </button>
                  </Grid.Column>
                </Grid>
              </div>
              <div>
                <Grid stackable columns={1}>
                  <Grid.Column
                    mobile={16}
                    tablet={16}
                    computer={16}
                    className="product-content-categories"
                  >
                    <Image
                      src={logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Face Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FaceProtection"
                        });
                      }}
                    >
                      Show
                    </button>
                  </Grid.Column>
                </Grid>
              </div>
              <div>
                <Grid stackable columns={1}>
                  <Grid.Column
                    mobile={16}
                    tablet={16}
                    computer={16}
                    className="product-content-categories"
                  >
                    <Image
                      src={logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Hand Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HandProtection"
                        });
                      }}
                    >
                      Show
                    </button>
                  </Grid.Column>
                </Grid>
              </div>
            </Slider>
            <EyeProtection />
          </Container>
        </Segment>
      );
    } else if (this.state.whichComponentToShow === "HandProtection") {
      return (
        <Segment className="content-product" vertical textAlign="center">
          <Container>
            <Slider {...settings}>
              <div>
                <Grid stackable columns={1}>
                  <Grid.Column
                    mobile={16}
                    tablet={16}
                    computer={16}
                    className="product-content-categories"
                  >
                    <Image
                      src={logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Eye Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "EyeProtection"
                        });
                      }}
                    >
                      Show
                    </button>
                  </Grid.Column>
                </Grid>
              </div>
              <div>
                <Grid stackable columns={1}>
                  <Grid.Column
                    mobile={16}
                    tablet={16}
                    computer={16}
                    className="product-content-categories"
                  >
                    <Image
                      src={logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Head Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HeadProtection"
                        });
                      }}
                    >
                      Show
                    </button>
                  </Grid.Column>
                </Grid>
              </div>
              <div>
                <Grid stackable columns={1}>
                  <Grid.Column
                    mobile={16}
                    tablet={16}
                    computer={16}
                    className="product-content-categories"
                  >
                    <Image
                      src={logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Body Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "BodyProtection"
                        });
                      }}
                    >
                      Show
                    </button>
                  </Grid.Column>
                </Grid>
              </div>
              <div>
                <Grid stackable columns={1}>
                  <Grid.Column
                    mobile={16}
                    tablet={16}
                    computer={16}
                    className="product-content-categories"
                  >
                    <Image
                      src={logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Face Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FaceProtection"
                        });
                      }}
                    >
                      Show
                    </button>
                  </Grid.Column>
                </Grid>
              </div>
              <div>
                <Grid stackable columns={1}>
                  <Grid.Column
                    mobile={16}
                    tablet={16}
                    computer={16}
                    className="product-content-categories"
                  >
                    <Image
                      src={logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Hand Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HandProtection"
                        });
                      }}
                    >
                      Show
                    </button>
                  </Grid.Column>
                </Grid>
              </div>
            </Slider>
            <HandProtection />
          </Container>
        </Segment>
      );
    }

    return null;
  }
}
