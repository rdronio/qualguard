import React, { Component } from "react";
import { Container, Grid, Image, Segment } from "semantic-ui-react";

import bg_landingpage from "./images/bg_landingpage.png";
import logo from "./images/qualguard-logo.png";

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
            backgroundImage: `url(${bg_landingpage})`
          }}
        >
          <div className="customers-heading">Lorem ipsum dolor sit amet</div>
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
        <Container className="customers-extradesc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Container>
      </Segment>
    );
  }
}
