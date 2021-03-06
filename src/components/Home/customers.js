import React, { Component } from "react";
import { Container, Grid, Image, Segment } from "semantic-ui-react";

import bg_landingpage from "../images/bg_landingpage.png";

import corporations from "../images/corporate.png";
import dealers from "../images/handshake.png";
import tradingcompany from "../images/stock.png";

export default class Customers extends Component {
  render() {
    return (
      <Segment id="customers" className="career" vertical textAlign="center">
        <Segment
          id="customers_"
          className="career"
          vertical
          textAlign="center"
          style={{
            backgroundImage: `url(${bg_landingpage})`,
          }}
        >
          <div className="customers-heading">Track Records</div>
        </Segment>

        <Segment vertical textAlign="center" className="customers-card">
          <Container>
            <Grid stackable columns={3}>
              <Grid.Column mobile={16} tablet={16} computer={5}>
                <Grid stackable columns={2} className="customers-content">
                  <Grid.Column
                    mobile={16}
                    tablet={6}
                    computer={6}
                    className="customers-image-content"
                  >
                    <Image
                      src={corporations}
                      size="medium"
                      className="customers-image"
                    />
                  </Grid.Column>
                  <Grid.Column
                    mobile={16}
                    tablet={10}
                    computer={10}
                    className="customers-desc-content"
                  >
                    <div>
                      <div className="customers-title"> Agents </div>
                      {/* <div className="customers-desc"></div> */}
                    </div>
                  </Grid.Column>
                </Grid>
              </Grid.Column>

              <Grid.Column mobile={16} tablet={16} computer={5}>
                <Grid stackable columns={2} className="customers-content">
                  <Grid.Column
                    mobile={16}
                    tablet={6}
                    computer={6}
                    className="customers-image-content"
                  >
                    <Image
                      src={tradingcompany}
                      size="medium"
                      className="customers-image"
                    />
                  </Grid.Column>
                  <Grid.Column
                    mobile={16}
                    tablet={10}
                    computer={10}
                    className="customers-desc-content"
                  >
                    <div>
                      <div className="customers-title"> Trading Companies</div>
                      {/* <div className="customers-desc"></div> */}
                    </div>
                  </Grid.Column>
                </Grid>
              </Grid.Column>

              <Grid.Column mobile={16} tablet={16} computer={5}>
                <Grid stackable columns={2} className="customers-content">
                  <Grid.Column
                    mobile={16}
                    tablet={6}
                    computer={6}
                    className="customers-image-content"
                  >
                    <Image
                      src={dealers}
                      size="medium"
                      className="customers-image"
                    />
                  </Grid.Column>
                  <Grid.Column
                    mobile={16}
                    tablet={10}
                    computer={10}
                    className="customers-desc-content"
                  >
                    <div>
                      <div className="customers-title"> Corporations </div>
                      {/* <div className="customers-desc"></div> */}
                    </div>
                  </Grid.Column>
                </Grid>
              </Grid.Column>
            </Grid>
          </Container>
        </Segment>
        <Container className="customers-extradesc">
          <strong>Qualguard Corporation</strong> is a company that engages in
          trading and manufacturing of premium personal protective equipment.
          <br /> We are committed to excellence in keeping our customers safe at
          all times and equipping them from head to toe.
        </Container>
      </Segment>
    );
  }
}
