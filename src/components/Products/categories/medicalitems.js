import React, { Component } from "react";
import { Container, Segment, Grid, Image } from "semantic-ui-react";

import logo from "./images/qualguard-logo.png";

import mi1 from "./images/medicalitems/isopropyl-alcohol-70percent-ethyl.jpg";
import mi2 from "./images/medicalitems/bunny-suit-silver-back-blue.png";
import mi3 from "./images/medicalitems/latex-examination-gloves.jpg";
import mi4 from "./images/medicalitems/nitrile-gloves-blue.jpg";
import mi5 from "./images/medicalitems/isolation-gown.jpg";

export default class MedicalItems extends Component {
  render() {
    return (
      <Segment className="content-products" vertical textAlign="center">
        <Container>
          <div className="product">Medical Items</div>
          <Grid stackable columns={3}>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={mi1} size="small" className="product-image" />
              <div className="product-content-heading">
                ISPROPYL ALCOHOL 70% Ethyl Alcohol
              </div>
              <div className="product-desc">
                <ul>
                  <li> First Aid Anti Septic </li>
                  <li> Disinfectant</li>
                  <li> Provide maximum protection on hands </li>
                  <li> 3.2 Liters </li>
                  <li> Pharmaceutically grade </li>
                  <li> WHOLESALE AVAILABLE </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={mi2} size="small" className="product-image" />
              <div className="product-content-heading">
                BUNNY SUIT:SILVER BACK BLUE
              </div>
              <div className="product-desc">
                <ul>
                  <li>
                    Material: Waterproof Fabric Tafetta with SBL Silver Back
                    Lining
                  </li>
                  <li> Water-resistant/repellent</li>
                  <li> Washable & Reusable </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={mi3} size="small" className="product-image" />
              <div className="product-content-heading">
                Latex Examination Gloves
              </div>
              <div className="product-desc">
                <ul>
                  <li> Disposable Examination Gloves </li>
                  <li> Powder-Free</li>
                  <li> Non-Strerile </li>
                  <li> Ambidextrous</li>
                  <li> Single use </li>
                  <li>
                    Sizes: Extra Small; Small; Medium; Large; and Extra Large
                  </li>
                  <li> 100pcs</li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={mi4} size="small" className="product-image" />
              <div className="product-content-heading">
                Nitrile Gloves: Blue
              </div>
              <div className="product-desc">
                <ul>
                  <li> Disposable Examination Gloves </li>
                  <li> Powder-Free</li>
                  <li> Non-Strerile </li>
                  <li> Ambidextrous</li>
                  <li> Single use </li>
                  <li>
                    Sizes: Extra Small; Small; Medium; Large; and Extra Large
                  </li>
                  <li> 100pcs</li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={mi5} size="medium" className="product-image" />
              <div className="product-content-heading">Isolation Gown</div>
              <div className="product-desc">
                <ul>
                  <li> Non woven</li>
                  <li> Microfiber</li>
                  <li> Color: Aqua Blue </li>
                  <li> Thickness: 30, 60 90 gsm </li>
                </ul>
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
