import React, { Component } from "react";
import { Container, Segment, Grid, Image } from "semantic-ui-react";

import logo from "./images/qualguard-logo.png";

import ts1 from "./images/trafficsafety/Traffic-Cone-Plastic-1-300x300.jpg";
import ts2 from "./images/trafficsafety/PLASTICFLOOR SIGN2SIDED.JPG";
import ts3 from "./images/trafficsafety/TRAFFICSIGNBOARD.JPG";
import ts4 from "./images/trafficsafety/PostLane-Circle-300x300.jpg";
import ts5 from "./images/trafficsafety/Road-Marker-1-300x300.jpg";
import ts6 from "./images/trafficsafety/PostLane-Rectangle-300x300.jpg";
import ts7 from "./images/trafficsafety/Traffic-Baton-1-300x300.jpg";
import ts8 from "./images/trafficsafety/TRAFFICGLOVES.JPG";
import ts9 from "./images/trafficsafety/Traffic-Cone-28-1-300x300.jpg";
import ts10 from "./images/trafficsafety/PLASTICPOSTLANEWITHCHAINS.JPG";

import ts11 from "./images/trafficsafety/Road-Barrier-O-300x300.jpg";
import ts12 from "./images/trafficsafety/newbarrierroadrunner.JPG";

export default class TrafficRoadSafety extends Component {
  render() {
    return (
      <Segment className="content-products" vertical textAlign="center">
        <Container>
          <div className="product"> Traffic and Road Safety</div>
          <div className="trafficroadsafety-trafficsigns">
            <div className="trafficroadsafety-trafficsigns-heading">
              SAFETY TRAFFIC SIGNS
            </div>
            <div className="trafficroadsafety-trafficsigns-desc">
              These products are made of Virgin Medium Density Polyethylene
              (MDPE) with Ultra Violet Stabilizer materials to serve as
              protection against intense sunlight exposure and to maintain the
              high quality color fastness that do not fade.
            </div>
          </div>
          <Grid stackable columns={3}>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={ts1} size="small" className="product-image" />
              <div className="product-content-heading">
                Plastic Traffic Cone
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={ts2} size="small" className="product-image" />
              <div className="product-content-heading">
                Plastic Floor Sign (2 Sided)
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={ts3} size="small" className="product-image" />
              <div className="product-content-heading">Traffic Sign Board</div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={ts4} size="small" className="product-image" />
              <div className="product-content-heading">
                Post Lanes with Emblem (Circle)
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={ts5} size="small" className="product-image" />
              <div className="product-content-heading">Plastic Road Marker</div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={ts6} size="small" className="product-image" />
              <div className="product-content-heading">
                Post Lanes with Emblem (Square)
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={ts7} size="small" className="product-image" />
              <div className="product-content-heading">Traffic Baton</div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={ts8} size="small" className="product-image" />
              <div className="product-content-heading">Traffic Gloves</div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={ts9} size="small" className="product-image" />
              <div className="product-content-heading">
                {" "}
                Traffic Cone Rubberized with Reflector
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={ts10} size="small" className="product-image" />
              <div className="product-content-heading">
                {" "}
                Plastic Post Lane with Chains
              </div>
            </Grid.Column>
          </Grid>
        </Container>
        <Container>
          <div className="trafficroadsafety-trafficsigns">
            <div className="trafficroadsafety-trafficsigns-heading">
              PLASTIC ROAD BARRIERS
            </div>
            <div className="trafficroadsafety-trafficsigns-desc">
              Our plastic road barriers - Water Filled Plastic Barrier has been
              proven as cost-effective, efficient device for separation of
              traffic lanes, marking of detours and temporary routes, as well as
              physical protection of workers and construction equipment on road
              work sites. <br /> <br /> These Plastic Road Safety Barriers are
              joined at their ends to form a complete system and water filled
              will provide ballast against movement. Each of the Road Safety
              Barriers has a carrying capacity of 100 litres when filled with
              water to the recommended level. The Road Barrier is manufactured
              from virgin UV-Stabilized Polyethylene available in colours of
              your choice: Yellow or Orange.
            </div>
          </div>
          <Grid stackable columns={3}>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={ts11} size="small" className="product-image" />
              <div className="product-content-heading">
                Plastic Road Barrier
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={ts12} size="small" className="product-image" />
              <div className="product-content-heading">
                New Barrier (Road Runner)
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
