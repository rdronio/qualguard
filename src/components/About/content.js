import React, { Component } from "react";
import { Container, Segment, Grid, Image } from "semantic-ui-react";

import president_logo from "../images/JM.png";

export default class Content extends Component {
  render() {
    return (
      <Segment className="content-aboutus" vertical textAlign="center">
        <Container text textAlign="center" className="mission-content-aboutus">
          <div className="mission-heading">Mission</div>
          <div className="mission-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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
                  <Image src={president_logo} size="medium" className="president-image" />
                </Grid.Column>
                <Grid.Column
                  mobile={16}
                  tablet={10}
                  computer={10}
                  className="president-desc-content"
                >
                    <div className="president-title"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. </div>
                    <div className="president-desc">
                      Pres. JM
                    </div>
                </Grid.Column>
              </Grid>
            </Grid.Column>
          </Grid>
        </Container>

         <Container text textAlign="center" className="vision-content-aboutus">
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
        </Container>

      </Segment>
    );
  }
}
