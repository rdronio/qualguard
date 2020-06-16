import React, { Component } from "react";
import { Container, Grid, Image, Segment } from "semantic-ui-react";

import logo from "../images/qualguard-logo.png";
import quality from "../images/shield.png";
import reliable from "../images/trust.png";
import on_time from "../images/on-time.png";
import efficiency from "../images/efficiency.png";
import competitive from "../images/competitive.png";

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
                    <div className="service-title"> Quality </div>
                    <div className="service-desc">
                      Guaranteed in achieving uniformity, providing strict and
                      consistent commitment to standards.
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
                    src={efficiency}
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
                    <div className="service-title"> Efficiency </div>
                    <div className="service-desc">
                      Produced cost-effective products with a high sense of
                      quality and productivity.
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
                    src={competitive}
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
                    <div className="service-title"> Competitive </div>
                    <div className="service-desc">
                      Offering consumers greater value, by means of lower prices
                      or by providing greater benefits and service.
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
                      Engineered and tested the products to warrant its
                      dependability and consistency.
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
