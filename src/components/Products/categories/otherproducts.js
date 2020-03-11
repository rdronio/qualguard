import React, { Component } from "react";
import { Container, Segment, Grid, Image } from "semantic-ui-react";

import logo from "./images/qualguard-logo.png";

import op1 from "./images/otherproducts/Rescue-Can-1-300x300.jpg";
import op2 from "./images/otherproducts/spiderkingdangertape-thick.JPG";
import op3 from "./images/otherproducts/FAK-25-1-300x300.jpg";
import op4 from "./images/otherproducts/Mouth-Cover-1-300x300.jpg";
import op5 from "./images/otherproducts/Life-Ring-1-300x300.jpg";
import op6 from "./images/otherproducts/Caution-Tape-300x300.jpg";
import op7 from "./images/otherproducts/head-lamp-900-900-300x300.jpg";
import op8 from "./images/otherproducts/spiderkingleatherfootprotector.JPG";

export default class OtherProducts extends Component {
  render() {
    return (
      <Segment className="content-products" vertical textAlign="center">
        <Container>
          <div className="product"> Other Products </div>
          <Grid stackable columns={3}>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={op1} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Rescue Can
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, High visibility </li>
                  <li> Basic floatation device </li>
                  <li> Polyethylene Material </li>
                  <li> Nylon rope </li>
                  <li> Adjustable shoulder strap </li>
                  <li> Color: Orange </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={op2} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Danger Tape - Thick
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, High visibility </li>
                  <li> Red non-adhesive tape </li>
                  <li> Continuous "Danger" print </li>
                  <li> Polypropylene material </li>
                  <li> 3" X 305m </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={op3} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking First Aid Kit
              </div>
              <div className="product-desc">
                <ul>
                  <li> Easy to use, Convenient </li>
                  <li> Design to accommodate 1O or 25 persons </li>
                  <li> Plastic case with wall mounted option </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={op4} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Plastic Mouth Cover
              </div>
              <div className="product-desc">
                <ul>
                  <li> Spitguard </li>
                  <li> Heavy duty, Easy to use </li>
                  <li> Transparent anti saliva mask </li>
                  <li> Elastic ear hoops </li>
                  <li> Includes wiping cloth </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={op5} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Life Bouy
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, High visibility </li>
                  <li> Basic floatation device </li>
                  <li> Polyethylene Material </li>
                  <li> Nylon grab lines </li>
                  <li> 72cm Outer, 45cm Inner </li>
                  <li> Color: Orange with reflector </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={op6} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Caution Tape -Thick
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, High visibility </li>
                  <li> Yellow non-adhesive tape </li>
                  <li> Continuous "Caution" print </li>
                  <li> Polypropylene material </li>
                  <li> 3" X 305m </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={op7} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Head lamp
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy duty, Easy to use </li>
                  <li> Ultra bright LED light </li>
                  <li> Adjustable headstrap and inclination </li>
                  <li> 3 pcs x l .5V AAA size battery </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={op8} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Leather Foot Protector
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy duty </li>
                  <li> Design for welding, grinding, cutting </li>
                  <li> Heat resistant </li>
                  <li> Buffalo leather </li>
                  <li> Adjustable velcro fittings </li>
                </ul>
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
