import React, { Component } from "react";
import { Container, Segment, Grid, Image } from "semantic-ui-react";

import logo from "./images/qualguard-logo.png";

import rp1 from "./images/respiratoryprotection/N95V-300x300.jpg";
import rp2 from "./images/respiratoryprotection/3Ply-300x300.jpg";
import rp3 from "./images/respiratoryprotection/N95-300x300.jpg";
import rp4 from "./images/respiratoryprotection/LDM-300x300.jpg";
import rp5 from "./images/respiratoryprotection/Fullface-300x300.jpg";
import rp6 from "./images/respiratoryprotection/1SRespirator-300x300.jpg";
import rp7 from "./images/respiratoryprotection/2SRespirator-300x300.jpg";
import rp8 from "./images/respiratoryprotection/2TRespirator-300x300.jpg";
import rp9 from "./images/respiratoryprotection/1TRespirator-300x300.jpg";
import rp10 from "./images/respiratoryprotection/spiderking-catridge-s-431a-300x300.png";
import rp11 from "./images/respiratoryprotection/spiderkingcartridges-dust.JPG";
import rp12 from "./images/respiratoryprotection/TChemical-300x300.jpg";

export default class RespiratoryProtection extends Component {
  render() {
    return (
      <Segment className="content-products" vertical textAlign="center">
        <Container>
          <div className="product"> Respiratory Protection</div>
          <Grid stackable columns={3}>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={rp1} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking- N95 with Valve Dust Mask
              </div>
              <div className="product-desc">
                <ul>
                  <li> Reliable, Comfortable </li>
                  <li>
                    {" "}
                    95% filtration effclency against non-oil based particles{" "}
                  </li>
                  <li> Two-strap design with welded attachment </li>
                  <li> Cushioned nose foam and adjustable noseclip </li>
                  <li> Exhalation Valve design for hot working area </li>
                  <li> 20 pieces / box </li>
                  <li> NIOSH N95 Compliant </li>
                  <li> CE EN 149 Compliant </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={rp2} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Surgical Mask
              </div>
              <div className="product-desc">
                <ul>
                  <li> 3-ply Non-woven fiber material </li>
                  <li> 99% bacterial filtration efficiency </li>
                  <li> Pleated and Earloop fit design </li>
                  <li> Anti-static properties </li>
                  <li> For Medical, Food, Electronics </li>
                  <li> NIOSH Compliant </li>
                  <li> 50 pieces / box </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={rp3} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking - N95 Dust Mask
              </div>
              <div className="product-desc">
                <ul>
                  <li> Reliable, Comfortable </li>
                  <li>
                    {" "}
                    95% filtration effclency against non-oil based particles{" "}
                  </li>
                  <li> Two-strap design with welded attachment </li>
                  <li> Cushioned nose foam and adjustable noseclip </li>
                  <li> 20 pieces / box </li>
                  <li> NIOSH N95 Compliant </li>
                  <li> CE EN 149 Compliant </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={rp4} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking - Dust Mask
              </div>
              <div className="product-desc">
                <ul>
                  <li> Basic protection from particles </li>
                  <li> Non-woven fiber materials </li>
                  <li> Adjustable noseclip </li>
                  <li> Comfortable elastic band </li>
                  <li> 50 pieces / box </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={rp5} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Full Face Mask
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, Top Quality </li>
                  <li> Dual bayonet type filters </li>
                  <li> Scratch and Acid resistant Polycarbonate (PC) </li>
                  <li> Panoramic Visor </li>
                  <li> Silicon internal mask </li>
                  <li>
                    {" "}
                    6 - quick fastening and release buckles made from
                    non-allergenic rubber{" "}
                  </li>
                  <li> Cartridge sold separately </li>
                  <li> CE EN 136:1998 Class 2 compliant </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={rp6} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Single Respirator
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, Top Quality </li>
                  <li> Half-face protection. Bayonet type filters </li>
                  <li>
                    {" "}
                    Single Cartridge with Dual Diaphragm breather valve design{" "}
                  </li>
                  <li>
                    {" "}
                    ABS cartridge holder, adjustable elastic head strap with PE
                    headband reinforcement{" "}
                  </li>
                  <li> Cartridge sold separately </li>
                  <li> CE EN 136:1998 Class 2 compliant </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={rp7} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Double Respirator
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, Top Quality </li>
                  <li> Half-face protection. Bayonet type filters </li>
                  <li>
                    {" "}
                    Dual Cartridge with Single Diaphragm breather valve design{" "}
                  </li>
                  <li>
                    {" "}
                    ABS cartridge holder, adjustable elastic head strap with PE
                    headband reinforcement{" "}
                  </li>
                  <li> Cartridge sold separately </li>
                  <li> CE EN 136:1998 Class 2 compliant </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={rp8} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Double Respirator
              </div>
              <div className="product-desc">
                <ul>
                  <li> Dust and Chemical Respirator </li>
                  <li>
                    {" "}
                    Dual Cartridge with Single Diaphragm breather valve design{" "}
                  </li>
                  <li>
                    {" "}
                    ABS cartridge holder, adjustable elastic head strap with PE
                    headband reinforcement{" "}
                  </li>
                  <li> Cartridge sold separately </li>
                  <li> CE EN 140 compliant </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={rp9} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Single Respirator
              </div>
              <div className="product-desc">
                <ul>
                  <li>
                    {" "}
                    Single Cartridge with Dual Diaphragm breather valve design{" "}
                  </li>
                  <li>
                    {" "}
                    ABS cartridge holder, adjustable elastic head strap with PE
                    headband reinforcement{" "}
                  </li>
                  <li> Cartridge sold separately </li>
                  <li> CE EN 140 compliant </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={rp10} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Cartridges-Dust
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, Top Quality </li>
                  <li>
                    {" "}
                    For dust, mist, metallic fumes and small flying particles of
                    low toxicity{" "}
                  </li>
                  <li> Fit for 4SPKFF42l, 4SPKSRS100, 4SPKDRS200 </li>
                  <li> CE EN 143 Compliant </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={rp10} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Cartridges-Chemical
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, Top Quality </li>
                  <li>
                    {" "}
                    For organic vapours, Benzene, Carbon Tetrachloride, Acetone.{" "}
                  </li>
                  <li> Spray paint of low toxicily </li>
                  <li> Fit for 4SPKFF421, 4SPKSRS100, 4SPKDRS200 </li>
                  <li> CE EN 143 Compliant </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={rp10} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Cartridges-Ammonia
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, Top Quality </li>
                  <li> For ammonia and methylamine </li>
                  <li> Fit for 4SPKFF421, 4SPKSRS100, 4SPKDRS200 </li>
                  <li> CE EN 143 Compliant </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={rp11} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Cartridges-Dust
              </div>
              <div className="product-desc">
                <ul>
                  <li>
                    {" "}
                    For dust, mist, metallic fumes and small flying particles of
                    low toxicity{" "}
                  </li>
                  <li> Fit for 4SPKSRT102 / 4SPKDRT202 </li>
                  <li> CE EN 143 Compliant </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={rp12} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Cartridges-Chemical{" "}
              </div>
              <div className="product-desc">
                <ul>
                  <li>
                    {" "}
                    For organic vapours, Benzene, Carbon Tetrachloride. Acetone.{" "}
                  </li>
                  <li> Spray paint of low toxicity </li>
                  <li> Fit for 4SPKSRT102 / 4SPKDRT202 </li>
                  <li> CE EN 143 Compliant </li>
                </ul>
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
