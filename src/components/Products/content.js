import React, { Component } from "react";
import { Container, Segment, Grid, Image } from "semantic-ui-react";
import Slider from "react-slick";

import logo from "../images/qualguard-logo.png";

import HeadProtection from "./categories/headprotection";
import EyeProtection from "./categories/eyeprotection";
import FaceProtection from "./categories/faceprotection";
import HearingProtection from "./categories/hearingprotection";
import RespiratoryProtection from "./categories/respiratoryprotection";
import BodyProtection from "./categories/bodyprotection";
import FallProtection from "./categories/fallprotection";
import HandProtection from "./categories/handprotection";
import FootProtection from "./categories/footprotection";
import EyewashStation from "./categories/eyewashstation";
import FireProtection from "./categories/fireprotection";
import TrafficRoadSafety from "./categories/trafficroadsafety";
import SafetySignages from "./categories/safetysignages";
import OtherProducts from "./categories/otherproducts";
import MedicalItems from "./categories/medicalitems";

import headprotection_logo from "./categories/images/headprotection.png";
import eyeprotection_logo from "./categories/images/eyeprotection.png";
import faceprotection_logo from "./categories/images/faceprotection.png";
import hearingprotection_logo from "./categories/images/hearingprotection.png";
import respiratoryprotection_logo from "./categories/images/respiratoryprotection.png";
import bodyprotection_logo from "./categories/images/bodyprotection.png";
import fallprotection_logo from "./categories/images/fallprotection.png";
import handprotection_logo from "./categories/images/handprotection.png";
import footprotection_logo from "./categories/images/footprotection.png";
import eyewashstation_logo from "./categories/images/eyewashstation.png";
import otherproducts_logo from "./categories/images/otherproducts.png";
import fireprotection_logo from "./categories/images/fireprotection.png";
import trafficroadsafety_logo from "./categories/images/trafficroadsafety.png";
import safetysignages_logo from "./categories/images/safetysignages.png";
import medicalitems_logo from "./categories/images/medicalitemscategory.png";

export default class Content extends Component {
  state = {
    visible: true,
    whichComponentToShow: "HeadProtection",
  };

  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 10000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
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
                      src={headprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Head Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HeadProtection",
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
                      src={eyeprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Eye Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "EyeProtection",
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
                      src={faceprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Face Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FaceProtection",
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
                      src={hearingprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Hearing Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HearingProtection",
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
                      src={respiratoryprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Respiratory Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "RespiratoryProtection",
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
                      src={bodyprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Body Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "BodyProtection",
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
                      src={fallprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Fall Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FallProtection",
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
                      src={handprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Hand Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HandProtection",
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
                      src={footprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Foot Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FootProtection",
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
                      src={eyewashstation_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Eyewash Station
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "EyewashStation",
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
                      src={otherproducts_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Other Products
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "OtherProducts",
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
                      src={fireprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Fire Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FireProtection",
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
                      src={trafficroadsafety_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Traffic and Road Safety
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "TrafficRoadSafety",
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
                      src={safetysignages_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Safety Signages
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "SafetySignages",
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
                      src={medicalitems_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Medical Items
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "MedicalItems",
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
                      src={headprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Head Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HeadProtection",
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
                      src={eyeprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Eye Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "EyeProtection",
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
                      src={faceprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Face Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FaceProtection",
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
                      src={hearingprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Hearing Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HearingProtection",
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
                      src={respiratoryprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Respiratory Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "RespiratoryProtection",
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
                      src={bodyprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Body Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "BodyProtection",
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
                      src={fallprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Fall Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FallProtection",
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
                      src={handprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Hand Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HandProtection",
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
                      src={footprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Foot Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FootProtection",
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
                      src={eyewashstation_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Eyewash Station
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "EyewashStation",
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
                      src={otherproducts_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Other Products
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "OtherProducts",
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
                      src={fireprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Fire Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FireProtection",
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
                      src={trafficroadsafety_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Traffic and Road Safety
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "TrafficRoadSafety",
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
                      src={safetysignages_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Safety Signages
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "SafetySignages",
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
                      src={medicalitems_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Medical Items
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "MedicalItems",
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
    } else if (this.state.whichComponentToShow === "FaceProtection") {
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
                      src={headprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Head Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HeadProtection",
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
                      src={eyeprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Eye Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "EyeProtection",
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
                      src={faceprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Face Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FaceProtection",
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
                      src={hearingprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Hearing Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HearingProtection",
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
                      src={respiratoryprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Respiratory Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "RespiratoryProtection",
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
                      src={bodyprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Body Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "BodyProtection",
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
                      src={fallprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Fall Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FallProtection",
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
                      src={handprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Hand Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HandProtection",
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
                      src={footprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Foot Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FootProtection",
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
                      src={eyewashstation_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Eyewash Station
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "EyewashStation",
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
                      src={otherproducts_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Other Products
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "OtherProducts",
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
                      src={fireprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Fire Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FireProtection",
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
                      src={trafficroadsafety_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Traffic and Road Safety
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "TrafficRoadSafety",
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
                      src={safetysignages_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Safety Signages
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "SafetySignages",
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
                      src={medicalitems_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Medical Items
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "MedicalItems",
                        });
                      }}
                    >
                      Show
                    </button>
                  </Grid.Column>
                </Grid>
              </div>
            </Slider>
            <FaceProtection />
          </Container>
        </Segment>
      );
    } else if (this.state.whichComponentToShow === "HearingProtection") {
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
                      src={headprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Head Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HeadProtection",
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
                      src={eyeprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Eye Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "EyeProtection",
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
                      src={faceprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Face Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FaceProtection",
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
                      src={hearingprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Hearing Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HearingProtection",
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
                      src={respiratoryprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Respiratory Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "RespiratoryProtection",
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
                      src={bodyprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Body Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "BodyProtection",
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
                      src={fallprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Fall Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FallProtection",
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
                      src={handprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Hand Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HandProtection",
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
                      src={footprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Foot Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FootProtection",
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
                      src={eyewashstation_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Eyewash Station
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "EyewashStation",
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
                      src={otherproducts_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Other Products
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "OtherProducts",
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
                      src={fireprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Fire Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FireProtection",
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
                      src={trafficroadsafety_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Traffic and Road Safety
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "TrafficRoadSafety",
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
                      src={safetysignages_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Safety Signages
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "SafetySignages",
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
                      src={medicalitems_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Medical Items
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "MedicalItems",
                        });
                      }}
                    >
                      Show
                    </button>
                  </Grid.Column>
                </Grid>
              </div>
            </Slider>
            <HearingProtection />
          </Container>
        </Segment>
      );
    } else if (this.state.whichComponentToShow === "RespiratoryProtection") {
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
                      src={headprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Head Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HeadProtection",
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
                      src={eyeprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Eye Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "EyeProtection",
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
                      src={faceprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Face Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FaceProtection",
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
                      src={hearingprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Hearing Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HearingProtection",
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
                      src={respiratoryprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Respiratory Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "RespiratoryProtection",
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
                      src={bodyprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Body Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "BodyProtection",
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
                      src={fallprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Fall Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FallProtection",
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
                      src={handprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Hand Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HandProtection",
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
                      src={footprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Foot Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FootProtection",
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
                      src={eyewashstation_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Eyewash Station
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "EyewashStation",
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
                      src={otherproducts_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Other Products
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "OtherProducts",
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
                      src={fireprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Fire Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FireProtection",
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
                      src={trafficroadsafety_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Traffic and Road Safety
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "TrafficRoadSafety",
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
                      src={safetysignages_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Safety Signages
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "SafetySignages",
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
                      src={medicalitems_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Medical Items
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "MedicalItems",
                        });
                      }}
                    >
                      Show
                    </button>
                  </Grid.Column>
                </Grid>
              </div>
            </Slider>
            <RespiratoryProtection />
          </Container>
        </Segment>
      );
    } else if (this.state.whichComponentToShow === "BodyProtection") {
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
                      src={headprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Head Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HeadProtection",
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
                      src={eyeprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Eye Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "EyeProtection",
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
                      src={faceprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Face Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FaceProtection",
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
                      src={hearingprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Hearing Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HearingProtection",
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
                      src={respiratoryprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Respiratory Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "RespiratoryProtection",
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
                      src={bodyprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Body Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "BodyProtection",
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
                      src={fallprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Fall Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FallProtection",
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
                      src={handprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Hand Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HandProtection",
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
                      src={footprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Foot Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FootProtection",
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
                      src={eyewashstation_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Eyewash Station
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "EyewashStation",
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
                      src={otherproducts_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Other Products
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "OtherProducts",
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
                      src={fireprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Fire Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FireProtection",
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
                      src={trafficroadsafety_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Traffic and Road Safety
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "TrafficRoadSafety",
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
                      src={safetysignages_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Safety Signages
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "SafetySignages",
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
                      src={medicalitems_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Medical Items
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "MedicalItems",
                        });
                      }}
                    >
                      Show
                    </button>
                  </Grid.Column>
                </Grid>
              </div>
            </Slider>
            <BodyProtection />
          </Container>
        </Segment>
      );
    } else if (this.state.whichComponentToShow === "FallProtection") {
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
                      src={headprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Head Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HeadProtection",
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
                      src={eyeprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Eye Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "EyeProtection",
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
                      src={faceprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Face Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FaceProtection",
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
                      src={hearingprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Hearing Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HearingProtection",
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
                      src={respiratoryprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Respiratory Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "RespiratoryProtection",
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
                      src={bodyprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Body Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "BodyProtection",
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
                      src={fallprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Fall Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FallProtection",
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
                      src={handprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Hand Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HandProtection",
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
                      src={footprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Foot Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FootProtection",
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
                      src={eyewashstation_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Eyewash Station
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "EyewashStation",
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
                      src={otherproducts_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Other Products
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "OtherProducts",
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
                      src={fireprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Fire Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FireProtection",
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
                      src={trafficroadsafety_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Traffic and Road Safety
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "TrafficRoadSafety",
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
                      src={safetysignages_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Safety Signages
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "SafetySignages",
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
                      src={medicalitems_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Medical Items
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "MedicalItems",
                        });
                      }}
                    >
                      Show
                    </button>
                  </Grid.Column>
                </Grid>
              </div>
            </Slider>
            <FallProtection />
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
                      src={headprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Head Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HeadProtection",
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
                      src={eyeprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Eye Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "EyeProtection",
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
                      src={faceprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Face Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FaceProtection",
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
                      src={hearingprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Hearing Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HearingProtection",
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
                      src={respiratoryprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Respiratory Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "RespiratoryProtection",
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
                      src={bodyprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Body Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "BodyProtection",
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
                      src={fallprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Fall Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FallProtection",
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
                      src={handprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Hand Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HandProtection",
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
                      src={footprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Foot Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FootProtection",
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
                      src={eyewashstation_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Eyewash Station
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "EyewashStation",
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
                      src={otherproducts_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Other Products
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "OtherProducts",
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
                      src={fireprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Fire Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FireProtection",
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
                      src={trafficroadsafety_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Traffic and Road Safety
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "TrafficRoadSafety",
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
                      src={safetysignages_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Safety Signages
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "SafetySignages",
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
                      src={medicalitems_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Medical Items
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "MedicalItems",
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
    } else if (this.state.whichComponentToShow === "FootProtection") {
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
                      src={headprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Head Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HeadProtection",
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
                      src={eyeprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Eye Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "EyeProtection",
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
                      src={faceprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Face Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FaceProtection",
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
                      src={hearingprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Hearing Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HearingProtection",
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
                      src={respiratoryprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Respiratory Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "RespiratoryProtection",
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
                      src={bodyprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Body Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "BodyProtection",
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
                      src={fallprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Fall Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FallProtection",
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
                      src={handprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Hand Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HandProtection",
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
                      src={footprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Foot Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FootProtection",
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
                      src={eyewashstation_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Eyewash Station
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "EyewashStation",
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
                      src={otherproducts_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Other Products
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "OtherProducts",
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
                      src={fireprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Fire Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FireProtection",
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
                      src={trafficroadsafety_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Traffic and Road Safety
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "TrafficRoadSafety",
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
                      src={safetysignages_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Safety Signages
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "SafetySignages",
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
                      src={medicalitems_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Medical Items
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "MedicalItems",
                        });
                      }}
                    >
                      Show
                    </button>
                  </Grid.Column>
                </Grid>
              </div>
            </Slider>
            <FootProtection />
          </Container>
        </Segment>
      );
    } else if (this.state.whichComponentToShow === "EyewashStation") {
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
                      src={headprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Head Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HeadProtection",
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
                      src={eyeprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Eye Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "EyeProtection",
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
                      src={faceprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Face Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FaceProtection",
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
                      src={hearingprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Hearing Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HearingProtection",
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
                      src={respiratoryprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Respiratory Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "RespiratoryProtection",
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
                      src={bodyprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Body Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "BodyProtection",
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
                      src={fallprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Fall Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FallProtection",
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
                      src={handprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Hand Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HandProtection",
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
                      src={footprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Foot Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FootProtection",
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
                      src={eyewashstation_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Eyewash Station
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "EyewashStation",
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
                      src={otherproducts_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Other Products
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "OtherProducts",
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
                      src={fireprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Fire Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FireProtection",
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
                      src={trafficroadsafety_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Traffic and Road Safety
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "TrafficRoadSafety",
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
                      src={safetysignages_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Safety Signages
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "SafetySignages",
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
                      src={medicalitems_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Medical Items
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "MedicalItems",
                        });
                      }}
                    >
                      Show
                    </button>
                  </Grid.Column>
                </Grid>
              </div>
            </Slider>
            <EyewashStation />
          </Container>
        </Segment>
      );
    } else if (this.state.whichComponentToShow === "FireProtection") {
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
                      src={headprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Head Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HeadProtection",
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
                      src={eyeprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Eye Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "EyeProtection",
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
                      src={faceprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Face Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FaceProtection",
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
                      src={hearingprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Hearing Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HearingProtection",
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
                      src={respiratoryprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Respiratory Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "RespiratoryProtection",
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
                      src={bodyprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Body Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "BodyProtection",
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
                      src={fallprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Fall Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FallProtection",
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
                      src={handprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Hand Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HandProtection",
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
                      src={footprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Foot Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FootProtection",
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
                      src={eyewashstation_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Eyewash Station
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "EyewashStation",
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
                      src={otherproducts_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Other Products
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "OtherProducts",
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
                      src={fireprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Fire Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FireProtection",
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
                      src={trafficroadsafety_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Traffic and Road Safety
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "TrafficRoadSafety",
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
                      src={safetysignages_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Safety Signages
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "SafetySignages",
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
                      src={medicalitems_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Medical Items
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "MedicalItems",
                        });
                      }}
                    >
                      Show
                    </button>
                  </Grid.Column>
                </Grid>
              </div>
            </Slider>
            <FireProtection />
          </Container>
        </Segment>
      );
    } else if (this.state.whichComponentToShow === "TrafficRoadSafety") {
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
                      src={headprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Head Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HeadProtection",
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
                      src={eyeprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Eye Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "EyeProtection",
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
                      src={faceprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Face Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FaceProtection",
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
                      src={hearingprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Hearing Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HearingProtection",
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
                      src={respiratoryprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Respiratory Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "RespiratoryProtection",
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
                      src={bodyprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Body Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "BodyProtection",
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
                      src={fallprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Fall Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FallProtection",
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
                      src={handprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Hand Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HandProtection",
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
                      src={footprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Foot Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FootProtection",
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
                      src={eyewashstation_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Eyewash Station
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "EyewashStation",
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
                      src={otherproducts_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Other Products
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "OtherProducts",
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
                      src={fireprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Fire Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FireProtection",
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
                      src={trafficroadsafety_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Traffic and Road Safety
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "TrafficRoadSafety",
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
                      src={safetysignages_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Safety Signages
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "SafetySignages",
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
                      src={medicalitems_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Medical Items
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "MedicalItems",
                        });
                      }}
                    >
                      Show
                    </button>
                  </Grid.Column>
                </Grid>
              </div>
            </Slider>
            <TrafficRoadSafety />
          </Container>
        </Segment>
      );
    } else if (this.state.whichComponentToShow === "SafetySignages") {
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
                      src={headprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Head Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HeadProtection",
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
                      src={eyeprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Eye Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "EyeProtection",
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
                      src={faceprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Face Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FaceProtection",
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
                      src={hearingprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Hearing Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HearingProtection",
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
                      src={respiratoryprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Respiratory Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "RespiratoryProtection",
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
                      src={bodyprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Body Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "BodyProtection",
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
                      src={fallprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Fall Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FallProtection",
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
                      src={handprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Hand Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HandProtection",
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
                      src={footprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Foot Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FootProtection",
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
                      src={eyewashstation_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Eyewash Station
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "EyewashStation",
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
                      src={otherproducts_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Other Products
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "OtherProducts",
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
                      src={fireprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Fire Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FireProtection",
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
                      src={trafficroadsafety_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Traffic and Road Safety
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "TrafficRoadSafety",
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
                      src={safetysignages_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Safety Signages
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "SafetySignages",
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
                      src={medicalitems_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Medical Items
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "MedicalItems",
                        });
                      }}
                    >
                      Show
                    </button>
                  </Grid.Column>
                </Grid>
              </div>
            </Slider>
            <SafetySignages />
          </Container>
        </Segment>
      );
    } else if (this.state.whichComponentToShow === "OtherProducts") {
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
                      src={headprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Head Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HeadProtection",
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
                      src={eyeprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Eye Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "EyeProtection",
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
                      src={faceprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Face Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FaceProtection",
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
                      src={hearingprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Hearing Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HearingProtection",
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
                      src={respiratoryprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Respiratory Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "RespiratoryProtection",
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
                      src={bodyprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Body Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "BodyProtection",
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
                      src={fallprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Fall Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FallProtection",
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
                      src={handprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Hand Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HandProtection",
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
                      src={footprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Foot Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FootProtection",
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
                      src={eyewashstation_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Eyewash Station
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "EyewashStation",
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
                      src={otherproducts_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Other Products
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "OtherProducts",
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
                      src={fireprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Fire Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FireProtection",
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
                      src={trafficroadsafety_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Traffic and Road Safety
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "TrafficRoadSafety",
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
                      src={safetysignages_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Safety Signages
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "SafetySignages",
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
                      src={medicalitems_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Medical Items
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "MedicalItems",
                        });
                      }}
                    >
                      Show
                    </button>
                  </Grid.Column>
                </Grid>
              </div>
            </Slider>
            <OtherProducts />
          </Container>
        </Segment>
      );
    } else if (this.state.whichComponentToShow === "MedicalItems") {
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
                      src={headprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Head Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HeadProtection",
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
                      src={eyeprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Eye Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "EyeProtection",
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
                      src={faceprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Face Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FaceProtection",
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
                      src={hearingprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Hearing Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HearingProtection",
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
                      src={respiratoryprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Respiratory Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "RespiratoryProtection",
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
                      src={bodyprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Body Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "BodyProtection",
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
                      src={fallprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Fall Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FallProtection",
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
                      src={handprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Hand Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "HandProtection",
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
                      src={footprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Foot Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FootProtection",
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
                      src={eyewashstation_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Eyewash Station
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "EyewashStation",
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
                      src={otherproducts_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Other Products
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "OtherProducts",
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
                      src={fireprotection_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Fire Protection
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "FireProtection",
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
                      src={trafficroadsafety_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Traffic and Road Safety
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "TrafficRoadSafety",
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
                      src={safetysignages_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Safety Signages
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "SafetySignages",
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
                      src={medicalitems_logo}
                      size="tiny"
                      className="product-categories-image"
                    />
                    <div className="product-content-categories-heading">
                      Medical Items
                    </div>
                    <button
                      onClick={() => {
                        this.setState({
                          whichComponentToShow: "MedicalItems",
                        });
                      }}
                    >
                      Show
                    </button>
                  </Grid.Column>
                </Grid>
              </div>
            </Slider>
            <MedicalItems />
          </Container>
        </Segment>
      );

      return null;
    }
  }
}
