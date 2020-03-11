import React, { Component } from "react";
import { Container, Segment, Grid, Image } from "semantic-ui-react";

import logo from "./images/qualguard-logo.png";

import fp1 from "./images/fireprotection/Helmet-300x300.jpg";
import fp2 from "./images/fireprotection/Gloves-300x300.jpg";
import fp3 from "./images/fireprotection/Boots-300x300.jpg";
import fp4 from "./images/fireprotection/Blanket-300x300.jpg";
import fp5 from "./images/fireprotection/Axe-300x300.jpg";
import fp6 from "./images/fireprotection/spiderkingfiremanshose.JPG";
import fp7 from "./images/fireprotection/SPIDERKINGFIREMANSSUITPANTSANDJACKET.JPG";
import fp8 from "./images/fireprotection/FX-DC-300x300.jpg";
import fp9 from "./images/fireprotection/FX-AFFF-300x300.jpg";
import fp10 from "./images/fireprotection/FX-HCFC-300x300.jpg";
import fp11 from "./images/fireprotection/SCBA-300x300.jpg";

export default class FireProtection extends Component {
  render() {
    return (
      <Segment className="content-products" vertical textAlign="center">
        <Container>
          <div className="product"> Fire Protection</div>
          <Grid stackable columns={3}>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={fp1} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Fireman's Helmet
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy duty, Easy to use </li>
                  <li>
                    {" "}
                    Monobloc fire resistant, shock absorption and heat
                    insulating shell{" "}
                  </li>
                  <li> Adjustable headgear suspension </li>
                  <li> Aluminized nape protector </li>
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
                Spiderking Fireman's Gloves
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy duty, High Visibility </li>
                  <li> Fire resistant and heat insulating fabric </li>
                  <li> Leather palm and fingers for extra protection </li>
                  <li> High visibil ity reflector </li>
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
                Spiderking Fireman's Boots
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy duty, Comfortable </li>
                  <li> Fire resistant and heat insulating rubber </li>
                  <li> Steel toe cap and Steel mid plate </li>
                  <li>
                    {" "}
                    Voltage shock protection: 5,000V Anti-skid, oil and chemical
                    resistant sole{" "}
                  </li>
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
                Spiderking Fire Blanket
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy duty, Easy to use</li>
                  <li> PVC case with wall mounted option </li>
                  <li> Silica fiberglass cloth material </li>
                  <li> Size: 1.8m x 1.8m </li>
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
                Spiderking Fireman's Axe
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy duty</li>
                  <li> Pick head axe </li>
                  <li> Steel axe head </li>
                  <li> Durable wood handle </li>
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
                Spiderking Fireman's Hose
              </div>
              <div className="product-desc">
                <ul>
                  <li> UL(300) or FM Approved </li>
                  <li> 400 PSI Working Pressure </li>
                  <li> 1200 PSI Burst Pressure </li>
                  <li> CNI Aluminum Alloy Couplings </li>
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
                SPIDERKING FIREMAN'S SUIT PANTS AND JACKET
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy duty, High Visibility </li>
                  <li> Jacket and Trousers </li>
                  <li> Fire resistant, heat insulating and water resistant </li>
                  <li> Made from Nomex®Material </li>
                  <li> High visibility reflector </li>
                  <li> Available: l -layer, 3-layer </li>
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
              <div className="product-content-heading">Dry Chemical</div>
              <div className="product-desc">
                <ul>
                  <li> Multi-purpose fire-extinguisher</li>
                  <li> Design for class A B C fire </li>
                  <li> A = wood, paper, most plastics </li>
                  <li> B = flammable liquid and gases </li>
                  <li> C = Energized electrical equipments </li>
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
              <div className="product-content-heading">AFFF</div>
              <div className="product-desc">
                <ul>
                  <li> Waterbased, Foam Type </li>
                  <li> Can be used for class A B fire</li>
                  <li> Best for flammable liquid and gases </li>
                  <li> Ideal for quickly covering large areas </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={fp10} size="small" className="product-image" />
              <div className="product-content-heading">HCFC</div>
              <div className="product-desc">
                <ul>
                  <li> Multi-purpose fire-extinguisher</li>
                  <li> Design for class A B C fire </li>
                  <li> without leaving messy residue</li>
                  <li> Ideal for areas with high electronic load </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={fp11} size="small" className="product-image" />
              <div className="product-content-heading">
                SPIDERKING SCBA / BREATHING APPARATUS
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy duty, Easy to use </li>
                  <li> 30-45 mins air capacity steel cylinder </li>
                  <li> Wide vision full face mask </li>
                  <li>
                    {" "}
                    Backplate, carrying harness, pnuematic system reducer with
                    integrated cylinder connecter pressure guage, whistle and
                    demand valve Includes Polyethyline carrying case{" "}
                  </li>
                </ul>
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
