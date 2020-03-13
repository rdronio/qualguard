import React, { Component } from "react";
import { Container, Segment, Grid, Image } from "semantic-ui-react";

import president_logo from "../images/JM.png";
import president_logo2 from "../images/JM2.png";

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
                    src={president_logo2}
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
                    <span> Welcome to QualGuard! </span>
                    <br />
                    <br />
                    As you visit our website, you will get a feel how serious
                    our company to be a trusted name in all your safety needs
                    and requirements. <br />
                    <br />
                    <strong> We treat our customers our family </strong>
                    <br />
                    <br />
                    We believe that without our customers we are nothing, we are
                    serious in meeting and exceeding the customer expectations
                    regardless how easy or difficult the situation, how big or
                    small our customers.
                    <br />
                    <br />
                    <strong>
                      We bring out the best version of our employees
                    </strong>
                    <br />
                    <br />
                    At <span id="about-qg">QualGuard</span>, we are not just
                    after with gains, we are also in the business of
                    transforming our people to showcase their professional ethos
                    in all of their dealings and interactions. They seriously
                    take ownership in their field of assignment.
                    <br />
                    <br />
                    <strong>We have a strong experience and expertise</strong>
                    <br />
                    <br />
                    At <span id="about-qg">QualGuard</span>, our team worked in
                    different industries in the world. We are confident of our
                    knowledge to build standards of excellence in the field of
                    Safety. We adhere and embrace latest innovations and
                    technologies to ensure the leading edge for our customers.
                    <br />
                    <br />I hope this gives you a glimpse to know{" "}
                    <span id="about-qg">QualGuard</span> better! Whether you are
                    a potential customer; could be a corporation, dealers,
                    retailers, trading companies, distributors and agents, a
                    supplier or a future employee, we look forward to finding
                    out how we can work together like no other!
                    <br />
                    <br />
                  </div>
                  <div className="president-desc">
                    Jamel Erquiza
                    <br />
                  </div>
                  <div className="president-desc-2">
                    CEO
                    <br />
                    QualGuard Corporation{" "}
                  </div>
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
                Our mission is to focus on safety, quality and efficiency. We
                commit to keep your Home, Workplace, Job Sites Safe with 0%
                Risk. We are confident that we can fulfill your protection needs
                up to your expectations coupled with a high standard of
                services.
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
                We envision ourselves to be the leading and most preferred
                Personal Protective Equipment Company by consistently procuring
                the most useful and most relevant safety equipment that suit the
                average of client needs.
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
