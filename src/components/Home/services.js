import React, { Component } from "react";
import { Container, Grid, Image, Segment } from "semantic-ui-react";

import logo from "../images/qualguard-logo.png";
import quality from "../images/shield.png";
import reliable from "../images/trust.png";
import on_time from "../images/on-time.png";
import professional from "../images/professional.png";

export default class Services extends Component {
  render() {
    return (
      <Segment id="services_" className="career" vertical textAlign="center">
        <Container>
          <Grid stackable columns={2}>
            <Grid.Column mobile={16} tablet={16} computer={8}>
              <Grid stackable columns={2} className="services-content">
                <Grid.Column
                  mobile={16}
                  tablet={6}
                  computer={6}
                  className="services-image-content"
                >
                  <Image
                    src={quality}
                    size="medium"
                    className="services-image"
                  />
                </Grid.Column>
                <Grid.Column
                  mobile={16}
                  tablet={10}
                  computer={10}
                  className="services-desc-content"
                >
                  <div>
                    <div className="service-title"> We Deliver Quality </div>
                    <div className="service-desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </div>
                  </div>
                </Grid.Column>
              </Grid>
            </Grid.Column>

            <Grid.Column mobile={16} tablet={16} computer={8}>
              <Grid stackable columns={2} className="services-content">
                <Grid.Column
                  mobile={16}
                  tablet={6}
                  computer={6}
                  className="services-image-content"
                >
                  <Image
                    src={on_time}
                    size="medium"
                    className="services-image"
                  />
                </Grid.Column>
                <Grid.Column
                  mobile={16}
                  tablet={10}
                  computer={10}
                  className="services-desc-content"
                >
                  <div>
                    <div className="service-title"> Always On Time </div>
                    <div className="service-desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </div>
                  </div>
                </Grid.Column>
              </Grid>
            </Grid.Column>
          </Grid>
        </Container>
        <Container>
          <Grid stackable columns={2}>
            <Grid.Column mobile={16} tablet={16} computer={8}>
              <Grid stackable columns={2} className="services-content">
                <Grid.Column
                  mobile={16}
                  tablet={6}
                  computer={6}
                  className="services-image-content"
                >
                  <Image
                    src={reliable}
                    size="medium"
                    className="services-image"
                  />
                </Grid.Column>
                <Grid.Column
                  mobile={16}
                  tablet={10}
                  computer={10}
                  className="services-desc-content"
                >
                  <div>
                    <div className="service-title"> Reliable </div>
                    <div className="service-desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </div>
                  </div>
                </Grid.Column>
              </Grid>
            </Grid.Column>

            <Grid.Column mobile={16} tablet={16} computer={8}>
              <Grid stackable columns={2} className="services-content">
                <Grid.Column
                  mobile={16}
                  tablet={6}
                  computer={6}
                  className="services-image-content"
                >
                  <Image
                    src={professional}
                    size="medium"
                    className="services-image"
                  />
                </Grid.Column>
                <Grid.Column
                  mobile={16}
                  tablet={10}
                  computer={10}
                  className="services-desc-content"
                >
                  <div>
                    <div className="service-title"> Professional Services </div>
                    <div className="service-desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </div>
                  </div>
                </Grid.Column>
              </Grid>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
