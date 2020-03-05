import React, { Component } from "react";
import { Segment, Image, Grid, Container } from "semantic-ui-react";

import logo from "../images/qualguard-logo.png";
import systemo from "../images/systemoph-logo.png";

export default class Footer extends Component {
  render() {
    return (
      <Segment className="footer" vertical textAlign="center">
        <Container className="footer-content">
          <Grid stackable columns={3}>
            <Grid.Column width="4" className="">
              <Image src={logo} size="small" className="footer-logo" />
            </Grid.Column>

            <Grid.Column width="4">
              <div className="footer-title"> Contact Details </div>
              <div className="footer-desc">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet <br /> +639123456789 <br />{" "}
                  +639123456789 <br /> +639123456789
                </p>
              </div>
            </Grid.Column>

            <Grid.Column width="4" className="">
              <div className="footer-title"> Address </div>
              <div className="footer-desc">
                Main: Lorem ipsum dolor sit amet
              </div>
            </Grid.Column>

            <Grid.Column width="4" className="">
              <div className="footer-title"> Office Hours </div>
              <div className="footer-desc">
                Lorem ipsum dolor sit amet <br />
                Lorem ipsum dolor sit amet <br />
                Lorem ipsum dolor sit amet <br />
                Lorem ipsum dolor sit amet <br />
                Lorem ipsum dolor sit amet <br />
              </div>
            </Grid.Column>
          </Grid>
        </Container>
        <Container className="footer-poweredby">
          <div className="systemoph">Powered By</div>
          <Image src={systemo} size="tiny" />
        </Container>
      </Segment>
    );
  }
}
