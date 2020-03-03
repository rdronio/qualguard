import React, { Component } from "react";
import { Container, Grid, Image, Segment } from "semantic-ui-react";

import bg_landingpage from "./images/bg_landingpage.png";
import logo from "./images/qualguard-logo.png";

export default class Customers extends Component {
  render() {
    return (
      <Segment id="customers_" className="career" vertical textAlign="center">
        <Segment
          id="customers_"
          className="career"
          vertical
          textAlign="center"
          style={{
            backgroundImage: `url(${bg_landingpage})`
          }}
        >
          <div className="customers-heading">Lorem ipsum dolor sit amet</div>
        </Segment>

        <Segment
          id="customers_"
          className="career customers-card"
          vertical
          textAlign="center"
        >
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
                      src={logo}
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
                      <div className="customers-title">
                        {" "}
                        Lorem ipsum dolor sit{" "}
                      </div>
                      <div className="customers-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </div>
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
                      src={logo}
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
                      <div className="customers-title">
                        {" "}
                        Lorem ipsum dolor sit{" "}
                      </div>
                      <div className="customers-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </div>
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
                      src={logo}
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
                      <div className="customers-title">
                        {" "}
                        Lorem ipsum dolor sit{" "}
                      </div>
                      <div className="customers-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </div>
                    </div>
                  </Grid.Column>
                </Grid>
              </Grid.Column>
            </Grid>
          </Container>
        </Segment>
      </Segment>
    );
  }
}
