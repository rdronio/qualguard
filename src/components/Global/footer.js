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
              <Image src={logo} size="small" />
            </Grid.Column>

            <Grid.Column width="4">
              <div className="footer-title"> Contact Details </div>
              <div className="footer-desc">
                <p>
                  {" "}
                  salesmarketing@systemoph.com <br /> +639175553844 <br />{" "}
                  +639612452478 <br /> +639190002586
                </p>
              </div>
            </Grid.Column>

            <Grid.Column width="4" className="">
              <div className="footer-title"> Address </div>
              <div className="footer-desc">Main: Guagua, Pampanga 2003</div>
              <div className="footer-desc">
                Branch: Malolos City, Bulacan 3000
              </div>
            </Grid.Column>

            <Grid.Column width="4" className="">
              <div className="footer-title"> Office Hours </div>
              <div className="footer-desc">
                Mon:09:00 am – 05:00 pm <br />
                Tue:09:00 am – 05:00 pm <br />
                Wed:09:00 am – 05:00 pm <br />
                Thu:09:00 am – 05:00 pm <br />
                Fri:09:00 am – 05:00 pm <br />
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
