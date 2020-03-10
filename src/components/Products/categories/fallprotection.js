import React, { Component } from "react";
import { Container, Segment, Grid, Image } from "semantic-ui-react";

import logo from "./images/qualguard-logo.png";

import fp2 from "./images/fallprotection/4D-300x300.jpg";
import fp3 from "./images/fallprotection/1D-300x300.jpg";
import fp4 from "./images/fallprotection/1D-300x300.jpg";
import fp5 from "./images/fallprotection/1Lanyard-300x300.jpg";
import fp6 from "./images/fallprotection/spk-single-lanyard-rope-type-900x900-300x300.png";
import fp7 from "./images/fallprotection/Lifeline-300x300.jpg";
import fp8 from "./images/fallprotection/SafetyBelt-BH-300x300.jpg";
import fp9 from "./images/fallprotection/Ropegrab-WT-300x300.jpg";

export default class FallProtection extends Component {
  render() {
    return (
      <Segment className="content-products" vertical textAlign="center">
        <Container>
          <div className="product"> Fall Protection</div>
          <Grid stackable columns={3}>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={logo} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Full Body Harness with Back Support{" "}
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy duty, High Quality </li>
                  <li> Webbing: 45mm </li>
                  <li> 1 dorsal D-ring, 1 frontal D-ring </li>
                  <li> 2 waist sides D-ring for positioning </li>
                  <li> Adjustable shoulder, thigh, waist and chest straps </li>
                  <li> Back support </li>
                  <li> CE EN 361 Compliant </li>
                  <li> OSHC Certified </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={fp2} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Full Body Harness 4D-Ring
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy duty, High Quality </li>
                  <li> Webbing: 45mm </li>
                  <li> 1 dorsal D-ring, 1 frontal D-ring </li>
                  <li> 2 waist sides D-ring for positioning </li>
                  <li> Adjustable shoulder, thigh, waist and chest straps </li>
                  <li> CE EN 361 Compliant </li>
                  <li> OSHC Certified </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={fp3} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Full Body Harness 1 D-Ring
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy duty, High Quality </li>
                  <li> Webbing: 45mm </li>
                  <li> 1 dorsal D-ring</li>
                  <li> 1.5" width silver reflector </li>
                  <li> Adjustable thigh and chest straps </li>
                  <li> CE EN 361 Compliant </li>
                  <li> OSHC Certified </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={fp4} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Double Lanyard with Shock Absorber
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy duty, High Quality </li>
                  <li> Gentle tear energy absorbing design </li>
                  <li> Webbing: 45mm </li>
                  <li> 2 auto-lock/quick release big hook </li>
                  <li> 1 manual locking carabiner </li>
                  <li> Maximum length: 2m </li>
                  <li> CE EN 354 Compliant </li>
                  <li> OSHC Certified </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={fp5} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Single Lanyard with Shock Absorber
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy duty, High Quality </li>
                  <li> Gentle tear energy absorbing design </li>
                  <li> Webbing: 45mm </li>
                  <li> 1 auto-lock/quick release big hook </li>
                  <li> 1 manual locking carabiner </li>
                  <li> Maximum length: 2m </li>
                  <li> CE EN 354 Compliant </li>
                  <li> OSHC Certified </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={fp6} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Single Lanyard Rope Type
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy duty, High Quality </li>
                  <li>
                    {" "}
                    Polyester rope with sewn terminations and protective
                    thimbles
                  </li>
                  <li> Polyester rope: l 4mm </li>
                  <li> 1 auto-lock/quick release big hook </li>
                  <li> 1 manual locking carabiner </li>
                  <li> Maximum length: 2m </li>
                  <li> CE EN 354 Compliant </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={fp7} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Lifeline 25 Meters
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy duty </li>
                  <li> Fall arrester or restraint</li>
                  <li> Nylon rope with l big hook and carabiner </li>
                  <li> Length: 25m </li>
                  <li> CE EN 354 Compliant </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={fp8} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Safety Belt w/ Rope and Big Hook
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy duty, easy to use </li>
                  <li> Webbing: 45mm </li>
                  <li> 1 D-ring for positioning </li>
                  <li>
                    {" "}
                    Polyester rope with sewn terminations and protective
                    thimbles with 1 big hook{" "}
                  </li>
                  <li> Maximum length: 2m </li>
                  <li> CE EN 354 Compliant </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={fp9} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Rope Grab - Wing Type
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy duty </li>
                  <li> Wing type design </li>
                  <li> Guided fall arrester for rope </li>
                  <li> Design for l 6mm rope </li>
                  <li> Weight capacity l 00kg </li>
                  <li> Made from steel </li>
                  <li> CE EN 354 Compliant </li>
                </ul>
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
