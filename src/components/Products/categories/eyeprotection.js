import React, { Component } from "react";
import { Container, Segment, Grid, Image } from "semantic-ui-react";

import logo from "./images/qualguard-logo.png";

import ep1 from "./images/eyeprotection/Laser100c-300x300.jpg";
// import ep1 from "./images/eyeprotection/Laser100c-300x300.jpg";
import ep3 from "./images/eyeprotection/Eclispsec-300x300.jpg";
import ep4 from "./images/eyeprotection/Pheobus-1-300x300.jpg";
import ep5 from "./images/eyeprotection/Laser130-300x300.jpg";
import ep6 from "./images/eyeprotection/Cobalt-1-300x300.jpg";
import ep10 from "./images/eyeprotection/spk-oriana-safety-spec-900x900-300x300.png";
import ep12 from "./images/eyeprotection/Cyclops-1-300x300.jpg";
import ep13 from "./images/eyeprotection/V100-300x300.jpg";
import ep14 from "./images/eyeprotection/Cord-300x300.jpg";
import ep15 from "./images/eyeprotection/Rack-300x300.jpg";
import ep16 from "./images/eyeprotection/V200-300x300.jpg";
import ep17 from "./images/eyeprotection/spk-spectacle-case-900x900-300x300.png";
import ep18 from "./images/eyeprotection/WGoggles-300x300.jpg";

export default class EyeProtection extends Component {
  render() {
    return (
      <Segment className="content-products" vertical textAlign="center">
        <Container>
          <div className="product"> Eye Protection</div>
          <Grid stackable columns={3}>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={ep1} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Laser 100 Clear Spectacles
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, Impact Resistant </li>
                  <li> Clear lens </li>
                  <li> Made from hard coated PC (Polycarbonate) </li>
                  <li> UV protection, Anti-fog and Anti-scratch </li>
                  <li> Temperature range: -5°C to 55°C </li>
                  <li> CE EN 166 Compliant </li>
                  <li> ANSI Z87,1-2015 Approved </li>
                  <li> OSHC Approved </li>
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
                Spiderking - Laser 110 Clear Spectacles
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, Impact Resistant </li>
                  <li> Clear lens, Adjustable arms </li>
                  <li> Made from hard coated PC (Polycarbonate) </li>
                  <li> UV protection, Anti-fog and Anti-scratch </li>
                  <li> Temperature range: -5°C to 55°C </li>
                  <li> CE EN 166 Compliant </li>
                  <li> ANSI Z87.1 Compliant </li>
                  <li> OSHC Approved </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={ep3} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking - Eclipse Clear{" "}
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, Impact Resistant </li>
                  <li> Clear lens, Adjustable arms </li>
                  <li> Side shield protection </li>
                  <li> Made from hard coated PC (Polycarbonate) </li>
                  <li> UV protection, Anti-fog and Anti-scratch </li>
                  <li> Temperature range: -5°C to 55°C </li>
                  <li> CE EN 166 Compliant </li>
                  <li> ANSI Z87,1-2015 Approved </li>
                  <li> OSHC Approved </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={ep4} size="small" className="product-image" />
              <div className="product-content-heading">
                {" "}
                Spiderking -Pheobus Safety Spectacles{" "}
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, Impact Resistant </li>
                  <li> Clear lens, Silver painted frame, Soft arm grip </li>
                  <li> Made from hard coated PC (Polycarbonate) </li>
                  <li> Silicon nose bridge </li>
                  <li> UV protection, Anti-fog and Anti-scratch </li>
                  <li> Temperature range: -5°C to 55°C </li>
                  <li> CE EN 166 Compliant </li>
                  <li> ANSI Z87.1 Compliant </li>
                  <li> OSHC Approved </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={ep5} size="small" className="product-image" />
              <div className="product-content-heading">
                {" "}
                Spiderking - Laser 130 Clear Spectacles{" "}
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, Impact Resistant </li>
                  <li> Clear lens, Nylon inclining arms </li>
                  <li> Silicon eyebrow pads and nose bridge </li>
                  <li> Made from hard coated PC (Polycarbonate) </li>
                  <li> UV protection, Anti-fog and Anti-scratch </li>
                  <li> Temperature range: -5°C to 55°C </li>
                  <li> CE EN 166 Compliant </li>
                  <li> ANSI Z87.1 Compliant </li>
                  <li> OSHC Approved </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={ep6} size="small" className="product-image" />
              <div className="product-content-heading">
                {" "}
                Spiderking - Cobalt Safety Spectacles Heavy-duty, Impact
                Resistant{" "}
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, Impact Resistant </li>
                  <li> Dark, Blue-mirror lens, Soft arm grip </li>
                  <li> Made from hard coated PC (Polycarbonate) </li>
                  <li> Silicon nose bridge </li>
                  <li> UV protection, Anti-fog and Anti-scratch </li>
                  <li> Temperature range: -5°C to 55°C </li>
                  <li> CE EN 166 Compliant </li>
                  <li> ANSI Z87.1 Compliant </li>
                  <li> OSHC Approved </li>
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
                {" "}
                Spiderking Laser 100 Smoke Spectacles{" "}
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, Impact Resistant </li>
                  <li> Dark lens </li>
                  <li> Made from hard coated PC (Polycarbonate) </li>
                  <li> UV protection, Anti-fog and Anti-scratch </li>
                  <li> Temperature range: -5°C to 55°C </li>
                  <li> CE EN 166 Compliant </li>
                  <li> ANSI Z87.1 Compliant </li>
                  <li> OSHC Approved </li>
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
                {" "}
                Spiderking Laser 110 Smoke Spectacles{" "}
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, Impact Resistant </li>
                  <li> Dark lens, Adjustable arms </li>
                  <li> Made from hard coated PC (Polycarbonate) </li>
                  <li> UV protection, Anti-fog and Anti-scratch </li>
                  <li> Temperature range: -5°C to 55°C </li>
                  <li> CE EN 166 Compliant </li>
                  <li> ANSI Z87.1 Compliant </li>
                  <li> OSHC Approved </li>
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
                {" "}
                Spiderking - Eclipse Smoke{" "}
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, Impact Resistant </li>
                  <li> Dark lens, Adjustable arms </li>
                  <li> Side shield protection </li>
                  <li> Made from hard coated PC (Polycarbonate) </li>
                  <li> UV protection, Anti-fog and Anti-scratch </li>
                  <li> Temperature range: -5°C to 55°C </li>
                  <li> CE EN 166 Compliant </li>
                  <li> ANSI Z87.1 Compliant </li>
                  <li> OSHC Approved </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={ep10} size="small" className="product-image" />
              <div className="product-content-heading">
                {" "}
                Spiderking - Oriana Safety Spectacles{" "}
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, Impact Resistant </li>
                  <li> Dark lens, Adjustable arm with Soft arm grip </li>
                  <li> Made from hard coated PC (Polycarbonate) </li>
                  <li> Silicon nose bridge </li>
                  <li> UV protection, Anti-fog and Anti-scratch </li>
                  <li> Temperature range: -5°C to 55°C </li>
                  <li> CE EN 166 Compliant </li>
                  <li> ANSI Z87.1 Compliant </li>
                  <li> OSHC Approved </li>
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
                {" "}
                Spiderking - Cyrus Clear Spectacles{" "}
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, Impact Resistant </li>
                  <li> Silver-mirror lens, Soft arm grip </li>
                  <li> Made from hard coated PC (Polycarbonate) </li>
                  <li> Silicon nose bridge </li>
                  <li> UV protection, Anti-fog and Anti-scratch </li>
                  <li> Temperature range: -5°C to 55°C </li>
                  <li> CE EN 166 Compliant </li>
                  <li> ANSI 287.1-2015 Approved </li>
                  <li> OSHC Approved </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={ep12} size="small" className="product-image" />
              <div className="product-content-heading">
                {" "}
                Spiderking - Cyclops Safety Spectacles{" "}
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, Impact Resistant </li>
                  <li> Dark, Red-mirror lens, Soft arm grip </li>
                  <li> Made from hard coated PC (Polycarbonate) </li>
                  <li> Silicon nose bridge </li>
                  <li> UV protection, Anti-fog and Anti-scratch </li>
                  <li> Temperature range: -5°C to 55°C </li>
                  <li> CE EN 166 Compliant </li>
                  <li> ANSI Z87.1 Compliant </li>
                  <li> OSHC Approved </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={ep13} size="small" className="product-image" />
              <div className="product-content-heading">
                {" "}
                Spiderking V100 Safety Goggles{" "}
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, Impact Resistant </li>
                  <li> Polycarbonate Clear lens, Polyester headband </li>
                  <li> Soft PVC frame </li>
                  <li> UV protection, Anti-fog and Anti-scratch </li>
                  <li> CE EN 166 Compliant </li>
                  <li> ANSI Z87.1 Compliant </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={ep14} size="small" className="product-image" />
              <div className="product-content-heading">
                {" "}
                Spiderking Spectacle Cord{" "}
              </div>
              <div className="product-desc">
                <ul>
                  <li> Adjustable neck string </li>
                  <li> Nylon/Polyester material </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={ep15} size="small" className="product-image" />
              <div className="product-content-heading">
                {" "}
                Spiderking Spectacles Diplay flack{" "}
              </div>
              <div className="product-desc">
                <ul>
                  <li> Clean and Modern-look </li>
                  <li> 5-layer rack with mirror </li>
                  <li> Made from Acrylic </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={ep16} size="small" className="product-image" />
              <div className="product-content-heading">
                {" "}
                Spiderking V200 Safety Goggles{" "}
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duly, Impact Resistant </li>
                  <li> Polycarbonate Clear lens, Polyester headband </li>
                  <li> Soft PVC frame </li>
                  <li> Indirect Ventilation System </li>
                  <li> UV protection, Anti-fog and Anti-scratch </li>
                  <li> CE EN 166 Compliant </li>
                  <li> ANSI Z87.1 Compliant </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={ep17} size="small" className="product-image" />
              <div className="product-content-heading">
                {" "}
                Spiderking Spectacle Case{" "}
              </div>
              <div className="product-desc">
                <ul>
                  <li> Black storage case </li>
                  <li> Nylon/Polyester material </li>
                  <li> Zipper lock with Hook attachment </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={ep18} size="small" className="product-image" />
              <div className="product-content-heading">
                {" "}
                Spiderking Welding Goggles{" "}
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, Impact Resistant </li>
                  <li> Polycarbonate we lding lens, Polyester headband </li>
                  <li> Soft PVC frame </li>
                  <li> Indirect Ventilation System </li>
                  <li> CE EN 166 Compliant </li>
                  <li> ANSI Z87.1 Compliant </li>
                </ul>
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
