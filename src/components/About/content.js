import React, { Component } from "react";
import { Container, Segment, Grid, Image } from "semantic-ui-react";

import president_logo from "../images/JM.png";

export default class Content extends Component {
  render() {
    return (
      <Segment className="content-aboutus" vertical textAlign="center">
        <Container text textAlign="center" className="aboutus-content">
          <div className="aboutus-content-desc">
            <strong>QUALGUARD</strong> is a distributor of personal protective
            equipment and supplies to protect you and your workforce from head
            to toe. We pride ourselves on offering unique tailored product like
            eye protection, head protection, hearing protection, Respiratory
            protection, body protection, fall protection, hand protection, foot
            protection, eyewash station, fire protection, face protection,
            traffic and road safety, safety signages and accompanying services
            in meeting customer’s needs. All products enable our customers to
            achieve environmental, compliance and importantly care for the
            environment.
          </div>
        </Container>

        <Container>
          <Grid stackable columns={1}>
            <Grid.Column mobile={16} tablet={16} computer={16}>
              <Grid stackable columns={2} className="president-content">
                <Grid.Column
                  mobile={16}
                  tablet={6}
                  computer={6}
                  className="president-image-content"
                >
                  <Image
                    src={president_logo}
                    size="medium"
                    className="president-image"
                  />
                </Grid.Column>
                <Grid.Column
                  mobile={16}
                  tablet={10}
                  computer={10}
                  className="president-desc-content"
                >
                  <div className="president-title">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.{" "}
                  </div>
                  <div className="president-desc">Pres. JM</div>
                </Grid.Column>
              </Grid>
            </Grid.Column>
          </Grid>
        </Container>

        {/* <Container text textAlign="center" className="vision-content-aboutus">
          <div className="vision-heading">Vision</div>
          <div className="vision-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </Container> */}

        <Container>
          <Grid stackable columns={2}>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={8}
              className="mission-content-aboutus"
            >
              <div className="mission-heading">Mission</div>
              <div className="mission-desc">
                Our aim is to promote safety workplace and Health equipment,
                which enables employers and organization to maintain the health,
                safety and welfare of all employees and members of the public,
                who may be at risk from their activities, environmentally
                friendly products to all clients at a competitive price.
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={8}
              className="vision-content-aboutus"
            >
              <div className="vision-heading">Vision</div>
              <div className="vision-desc">
                Our aim is to promote safety workplace and Health equipment,
                which enables employers and organization to maintain the health,
                safety and welfare of all employees and members of the public,
                who may be at risk from their activities, environmentally
                friendly products to all clients at a competitive price.
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
