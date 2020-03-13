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
              <div className="footer-title"> Contact Us </div>
              <div className="footer-desc">
                <p>
                  info@qualguardph.com <br />
                  <br /> 049-521-8631 <br />
                </p>
              </div>
            </Grid.Column>

            <Grid.Column width="4" className="">
              <div className="footer-title"> Address </div>
              <div className="footer-desc">
                Main: Unit 1A, The Junction, Carmelray Corner Wisdom, Carmelray
                Industrial Park 1, Canlubang, Calamba, Laguna, Philippines
              </div>
            </Grid.Column>

            <Grid.Column width="4" className="">
              <div className="footer-title"> Office Hours </div>
              <div className="footer-desc">
                Monday to Friday: 8:00 AM - 5:00 PM <br />
                Saturday and Sunday: Closed <br />
              </div>
            </Grid.Column>
          </Grid>
        </Container>
        <Container className="footer-poweredby">
          <div className="systemoph">Powered By</div>
          <a href="https://www.systemoph.com" target="_blank">
            <Image src={systemo} size="tiny" />
          </a>
        </Container>
      </Segment>
    );
  }
}
