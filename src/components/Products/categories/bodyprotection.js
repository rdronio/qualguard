import React, { Component } from "react";
import { Container, Segment, Grid, Image } from "semantic-ui-react";

import logo from "./images/qualguard-logo.png";

import bp1 from "./images/bodyprotection/Coverall-Plain-300x300.jpg";
import bp2 from "./images/bodyprotection/Coverall-Reflector-300x300.jpg";
import bp3 from "./images/bodyprotection/Vest-MN-O-300x300.jpg";
import bp4 from "./images/bodyprotection/Vest-SK-G-300x300.jpg";
import bp5 from "./images/bodyprotection/Vest-WPP-G-300x300.jpg";
import bp6 from "./images/bodyprotection/Vest-WOP-G-300x300.jpg";
import bp7 from "./images/bodyprotection/LifeVest-O-300x300.jpg";
import bp8 from "./images/bodyprotection/BackSupport-300x300.jpg";
import bp9 from "./images/bodyprotection/PEL-300x300.jpg";
import bp10 from "./images/bodyprotection/ColdStorage-300x300.jpg";
import bp11 from "./images/bodyprotection/RCPVC-O-300x300.jpg";
import bp12 from "./images/bodyprotection/spiderkingraincoatpantsandjacketnylon.JPG";
import bp13 from "./images/bodyprotection/raincoat-kneelength-900x900-300x300.png";
import bp14 from "./images/bodyprotection/RC-PCHO-PVC-O-300x300.jpg";
import bp15 from "./images/bodyprotection/Welding-Jacket-300x300.jpg";
import bp16 from "./images/bodyprotection/Welding-Pants-300x300.jpg";
import bp17 from "./images/bodyprotection/Welding-Apron-Sleeves-300x300.jpg";
import bp18 from "./images/bodyprotection/spiderkingleatherapronsleeveless.JPG";
import bp19 from "./images/bodyprotection/Welding-Maong-Sleeve-300x300.jpg";
import bp20 from "./images/bodyprotection/spiderkingapronmaongsleeveless.JPG";

export default class BodyProtection extends Component {
  render() {
    return (
      <Segment className="content-products" vertical textAlign="center">
        <Container>
          <div className="product"> Body Protection</div>
          <Grid stackable columns={3}>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={bp1} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Cover All - Plain
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy duty, high quality </li>
                  <li> 80% Cotton 20% Polyester </li>
                  <li> Breathable and Comfortable </li>
                  <li> Color: Navy Blue, Orange </li>
                  <li> We accept customized color and design</li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={bp2} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Cover All - Coffon Twill
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy duty, high quality </li>
                  <li> 80% Cotton 20% Polyester </li>
                  <li> Breathable and Comfortable </li>
                  <li> 7 " width silver reflector </li>
                  <li> Color: Navy Blue, Orange </li>
                  <li> We accept customized color and design </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={bp3} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Safety Vest Mesh Net
              </div>
              <div className="product-desc">
                <ul>
                  <li> Hi-visibility, Ligh tweight, Durable </li>
                  <li> 2" width laminated reflector </li>
                  <li> Heavy duty polyester fabric </li>
                  <li> Meshnet design </li>
                  <li> Color: Green and Orange </li>
                  <li> CE EN 477 Compliant </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={bp4} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Safety Vest Skeleton Type
              </div>
              <div className="product-desc">
                <ul>
                  <li> Hi-visibility, Lightweight, Durable </li>
                  <li> 2" width laminated reflector </li>
                  <li> Adjustable side straps </li>
                  <li> Heavy duty buckles </li>
                  <li> Color: Green and Orange </li>
                  <li> CE EN 477 Compliant </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={bp5} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Safety Vest Fabric with piping
              </div>
              <div className="product-desc">
                <ul>
                  <li> Hi-visibility, Lightweight, Durable </li>
                  <li> 2" width laminated reflector </li>
                  <li> Heavy duty polyester fabric </li>
                  <li> Color: Green and Orange </li>
                  <li> CE EN 477 Compliant </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={bp6} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Safety Vest Fabric without piping
              </div>
              <div className="product-desc">
                <ul>
                  <li> Hi-visibility, Lightweight, Durable </li>
                  <li> 2" width laminated reflector </li>
                  <li> Heavy duty polyester fabric </li>
                  <li> Color: Green and Orange </li>
                  <li> CE EN 477 Compliant </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={bp7} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Life Vest
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, High visibility </li>
                  <li> Basic floatation device </li>
                  <li> Whistle included </li>
                  <li> Color: Green and Orange </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={bp8} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Safety Back Support
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy duty, Comfortable </li>
                  <li> 8" mesh tape red abdominal support </li>
                  <li> Adjustable elastic suspender design </li>
                  <li> Size: M.L,XL </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={bp9} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Raincoat Pants and Jacket Polyester
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy duty, High grade </li>
                  <li> Water resistant </li>
                  <li> 2" width silver reflector </li>
                  <li> Polyester material </li>
                  <li> Size: S,M,L,XL,2XL </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={bp10} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Cold Storage Suit "Parka"
              </div>
              <div className="product-desc">
                <ul>
                  <li> Lightweight, Water resistant </li>
                  <li> Protection against cold working environment </li>
                  <li> Hooded jacket with pants </li>
                  <li> Polyester material </li>
                  <li> Color: Navy Blue, Orange </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={bp11} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Raincoat Pants and Jacket PVC{" "}
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy duty, Lightweight </li>
                  <li> Water resistant coat </li>
                  <li> 5 guage thickness </li>
                  <li> Material: PVC </li>
                  <li> Color: Yellow, Fatigue Green </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={bp12} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Raincoat Pants and Jacket Nylon
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy duty, Lightweight </li>
                  <li> Water resistant coat </li>
                  <li> 8 guage thickness </li>
                  <li> Material: Nylon </li>
                  <li> Color: Yellow, Fatigue Green </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={bp13} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Raincoat Knee-Length
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy duty, Lightweight </li>
                  <li> Water resistant coat </li>
                  <li> 8 guage thickness </li>
                  <li> Available material and color: </li>
                  <li> PVC - Orange and Fatigue green </li>
                  <li> Nylon - Yellow </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={bp14} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Raincoat Poncho Type
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy duty, Lightweight </li>
                  <li> Water resistant coat </li>
                  <li> 8 guage thickness </li>
                  <li> Available material and color: </li>
                  <li> PVC - Orange and Fatigue green </li>
                  <li> Nylon - Yellow </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={bp15} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Welding Jacket
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy duty, Heat resistant </li>
                  <li> Water resistant coat </li>
                  <li> Design for welding, grinding, cutting </li>
                  <li> Buffalo leather </li>
                  <li> 1" width silver reflector </li>
                  <li> Adjustable cuffs and neck velcro fittings </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={bp16} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Welding Pants
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy duty, Heat resistant </li>
                  <li> Design for welding, grinding, cutting </li>
                  <li> Buffalo leather </li>
                  <li> Garterized waist with suspenders </li>
                  <li> Adjustable ankle velcro fittings </li>
                  <li> Front side pockets and front zipper </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={bp17} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Leather Apron Jacket
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy duty </li>
                  <li> Design for welding, grinding, cutting </li>
                  <li> Heat resistant </li>
                  <li> Buffalo leather </li>
                  <li> Jacket type </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={bp18} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Leather Apron Sleeveless
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy duty </li>
                  <li> Design for welding, grinding, cutting </li>
                  <li> Heat and burn resistant </li>
                  <li> Buffalo leather </li>
                  <li> Apron type </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={bp19} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Apron Maong Jacket
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy duty, Lightweight </li>
                  <li> Design for welding, grinding, cutting </li>
                  <li> Heat and burn resistant </li>
                  <li> Maong (Denim) Material </li>
                  <li> Jacket type </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={bp20} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Apron Maong Sleeveless
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy duty, Lightweight </li>
                  <li> Design for low intensity welding, grinding, cutting </li>
                  <li> Heat and burn resistant </li>
                  <li> Maong (Denim) Material </li>
                  <li> Apron type </li>
                </ul>
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
