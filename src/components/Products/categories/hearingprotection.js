import React, { Component } from "react";
import { Container, Segment, Grid, Image } from "semantic-ui-react";

import logo from "./images/qualguard-logo.png";

import hp1 from "./images/hearingprotection/Braige-R-300x300.jpg";
import hp4 from "./images/hearingprotection/Mavis-R-300x300.jpg";
import hp5 from "./images/hearingprotection/Mavis-DC-300x300.jpg";
import hp6 from "./images/hearingprotection/Mavis-D-300x300.jpg";
import hp7 from "./images/hearingprotection/EPDispenser-300x300.jpg";

export default class HearingProtection extends Component {
  render() {
    return (
      <Segment className="content-products" vertical textAlign="center">
        <Container>
          <div className="product"> Hearing Protection</div>
          <Grid stackable columns={3}>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={hp1} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Braige-100 Earmuff
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, Comfortable </li>
                  <li> Adjustable padded earcups </li>
                  <li> ABS Earcups, PVC Leather with foam filler </li>
                  <li> Noise Reduction Rating (NRR): 28dB </li>
                  <li> Colors: Red, Yellow </li>
                  <li> CE EN 352.1 Compliant </li>
                  <li> ANSI S3.19 Compliant </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={logo} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Bralge-200 Earmuff
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, Comfortable </li>
                  <li> Adjustable padded earcups </li>
                  <li> ABS Earcups, PVC Leather with foam filler </li>
                  <li> Noise Reduction Rating (NRR): 28dB </li>
                  <li> Colors: Blue, Black </li>
                  <li> CE EN 352.1 Compliant </li>
                  <li> ANSI S3.19 Compliant </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={logo} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Asaph-01 Helmet Mounted Earmuffs
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, Comfortable </li>
                  <li> Safely helmet attachment </li>
                  <li> Adjustable padded earcups </li>
                  <li> ABS Earcups, PVC Leather with foam filler </li>
                  <li> Noise Reduction Rating (NRR): 28dB </li>
                  <li> Colors: Blue, Black </li>
                  <li> CE EN 352.1 Compliant </li>
                  <li> ANSI S3.19 Compliant </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={hp4} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Mavis-01R Reusable Earplug Corded{" "}
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, Comfortable </li>
                  <li> Soft, non-allergenic </li>
                  <li> PU Foam earplug, Nylon cord </li>
                  <li> Noise Reduction Rating (NRR): 32dB </li>
                  <li> CE EN 352.3 Compliant </li>
                  <li> ANSI S3.19 Compliant </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={hp5} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Mavis - 01D Disposable Earplug Corded
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, Comfortable </li>
                  <li> Soft, non-allergenic </li>
                  <li> PU Foam earplug, Nylon cord </li>
                  <li> Noise Reduction Rating (NRR): 32dB </li>
                  <li> CE EN 352.3 Compliant </li>
                  <li> ANSI S3.19 Compliant </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={hp6} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Mavis - 01D Disposable Earplug Corded
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, Comfortable </li>
                  <li> Soft, non-allergenic </li>
                  <li> PU Foam earplug</li>
                  <li> Noise Reduction Rating (NRR): 32dB </li>
                  <li> CE EN 352.3 Compliant </li>
                  <li> ANSI S3.19 Compliant </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={hp7} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Earplug Dispenser
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, Comfortable </li>
                  <li> l ,000 earplugs capacity </li>
                  <li> Twist-action dispenser </li>
                  <li> Wall-mounted design </li>
                  <li> Polycarbonate Container </li>
                </ul>
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
