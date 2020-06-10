import React, { Component } from "react";
import { Container, Segment, Grid, Image } from "semantic-ui-react";

import logo from "./images/qualguard-logo.png";

import hp1 from "./images/handprotection/armor-900x900-300x300.png";
import hp2 from "./images/handprotection/Builder-300x300.jpg";
import hp3 from "./images/handprotection/XPro-300x300.jpg";
import hp4 from "./images/handprotection/accura-900x900-300x300.png";
import hp5 from "./images/handprotection/Conflex-300x300.jpg";
import hp6 from "./images/handprotection/Nitrile-300x300.jpg";
import hp7 from "./images/handprotection/Indl-1-300x300.jpg";
import hp8 from "./images/handprotection/KG-Colored-300x300.jpg";
import hp9 from "./images/handprotection/KG-Natural-300x300.jpg";
import hp10 from "./images/handprotection/KG-RP-300x300.jpg";
import hp11 from "./images/handprotection/KG-Dotted-300x300.jpg";
import hp12 from "./images/handprotection/Maong-Gloves-300x300.jpg";
import hp13 from "./images/handprotection/spiderkingkevlarcutresistantgloves.JPG";
import hp14 from "./images/handprotection/Polycotton-300x300.jpg";

import hp15 from "./images/handprotection/spiderkingleathergloves.JPG";
import hp16 from "./images/handprotection/spiderkingweldingworkinggloves.JPG";
import hp17 from "./images/handprotection/spiderkingleatherworkinggloves.JPG";
import hp18 from "./images/handprotection/spiderkingleathergloves7SPKWGCHF.JPG";
import hp19 from "./images/handprotection/spiderkingleathergloves7SPKWGCB.JPG";
import hp20 from "./images/handprotection/spiderkingweldingworkinggloves7SPKWG7015.JPG";
import hp21 from "./images/handprotection/spiderkingleathergloves7SPKWG701B.JPG";
import hp22 from "./images/handprotection/spiderkingleathergloves7SPKWG501.JPG";
import hp23 from "./images/handprotection/spiderkingleathergloves7SPKWG301.JPG";
import hp24 from "./images/handprotection/spiderkingleathergloves7SPKWG305.JPG";
import hp25 from "./images/handprotection/spiderkingleathergloves7SPKWG5G.JPG";
import hp26 from "./images/handprotection/spiderkingTIGweldinggloves.JPG";

export default class HandProtection extends Component {
  render() {
    return (
      <Segment className="content-products" vertical textAlign="center">
        <Container>
          <div className="product"> Hand Protection</div>
          <Grid stackable columns={3}>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={hp1} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Safety Gloves - Armor{" "}
              </div>
              <div className="product-desc">
                <ul>
                  <li> Spiderking Safety Gloves - Armor </li>
                  <li> Cut resistant, Anti-abrasion gloves</li>
                  <li> HPPE (High Performance Polyethylene) fiber gloves </li>
                  <li> PU (Polyurethane) coated Palm and fingers </li>
                  <li> Ventilated back </li>
                  <li> Rating: 4 5 4 3 </li>
                  <li> CE EN 388 Compliant </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={hp2} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Safety Gloves - Builder{" "}
              </div>
              <div className="product-desc">
                <ul>
                  <li>
                    High-grade, Heavy Duty, Dextrous, Anti-abrasion gloves,
                    General use
                  </li>
                  <li> HPPE (High Performance Polyethylene) fiber gloves </li>
                  <li> Latex coated Palm and fingers </li>
                  <li> Ventilated back </li>
                  <li> Rating: 3 2 4 3 </li>
                  <li> CE EN 388 Compliant </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={hp3} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Safety Gloves - X-Pro{" "}
              </div>
              <div className="product-desc">
                <ul>
                  <li>
                    {" "}
                    High-grade, Heavy Duty, Dextrous, Dry and light oily
                    environment{" "}
                  </li>
                  <li> HPPE (High Performance Polyethylene) fiber gloves </li>
                  <li> Nitrile coated Palm and fingers </li>
                  <li> Ventilated back </li>
                  <li> Rating: 2 1 2 1 </li>
                  <li> CE EN 388 Compliant </li>
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
                Spiderking Safety Gloves - Accura{" "}
              </div>
              <div className="product-desc">
                <ul>
                  <li>
                    {" "}
                    High-grade, Heavy Duty, Dextrous, Anti-abrasion gloves{" "}
                  </li>
                  <li> HPPE (High Performance Polyethylene) fiber gloves </li>
                  <li> PU (Polyurethane) coated palm and back </li>
                  <li> Rating: 4 1 1 1 </li>
                  <li> CE EN 388 Compliant </li>
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
                Spiderking Safety Gloves - Conflex
              </div>
              <div className="product-desc">
                <ul>
                  <li>
                    High-grade, Heavy Duty, Dextrous, Precision, Delicate,
                    Maximum Dexterity
                  </li>
                  <li> Nylon Spandex fiber gloves </li>
                  <li> Micro foam Nitrile coated Palm and fingers </li>
                  <li> Ventilated back </li>
                  <li> Rating: 4 1 3 2 </li>
                  <li> CE EN 388 Compliant </li>
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
                Spiderking Nitrile Gloves
              </div>
              <div className="product-desc">
                <ul>
                  <li> High-Grade, Heavy Duty </li>
                  <li> Z-pattern grip and Cotton flocklined </li>
                  <li>
                    {" "}
                    Protection against solvents, oil, fats and bleaching
                    chemical agents{" "}
                  </li>
                  <li> 12 pairs / polybag </li>
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
                Spiderking Industrial Gloves
              </div>
              <div className="product-desc">
                <ul>
                  <li> High-Grade, Heavy Duty </li>
                  <li>
                    {" "}
                    Protection from chemical resistant, chlorinated solutions,
                    aromatic solvents, acids, alkalines and detergents{" "}
                  </li>
                  <li> Made from Latex rubber </li>
                  <li> Black exterior color </li>
                  <li> Orange unflocklined interior </li>
                  <li> Size: 18" and 22" </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={hp8} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Cotton Knitted Gloves - Colored
              </div>
              <div className="product-desc">
                <ul>
                  <li> High-Grade, Heavy Duty, Breathable </li>
                  <li> Elastic natural cotton material </li>
                  <li> Color: Gray </li>
                  <li> One size fits all </li>
                  <li> 700 Grams </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={hp9} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Cotton Knitted Gloves - Natural
              </div>
              <div className="product-desc">
                <ul>
                  <li>High-Grade, Heavy Duty, Breathable</li>
                  <li> Elastic natural cotton material </li>
                  <li> Color: Natural white </li>
                  <li> One size fits all </li>
                  <li> 600 Grams</li>
                  <li> 12 pairs / pack</li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={hp10} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Cotton Knitted Gloves - Rubber Palm
              </div>
              <div className="product-desc">
                <ul>
                  <li> High-Grade, Heavy Duty, Breathable </li>
                  <li> Elastic natural cotton material </li>
                  <li> Latex coated palm superior grip and durability </li>
                  <li> Color: Natural white, Orange palm </li>
                  <li> One size fits all </li>
                  <li> 1000 Grams</li>
                  <li> 12 pairs / pack</li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={hp11} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Cotton Knitted Gloves - Dotted Palm
              </div>
              <div className="product-desc">
                <ul>
                  <li>High-Grade, Heavy Duty, Breathable</li>
                  <li> Elastic natural cotton material </li>
                  <li> PVC dots for additional grip </li>
                  <li> Color: Natural white, Black dots </li>
                  <li> One size fits all </li>
                  <li> 700 Grams</li>
                  <li> 12 pairs / pack</li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={hp12} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Maong Gloves
              </div>
              <div className="product-desc">
                <ul>
                  <li>Heavy Duty, Dextrous, Comfortable </li>
                  <li> Heat resistant perfect for welding use </li>
                  <li> Alternative of leather gloves </li>
                  <li> 12 pairs / pack</li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={hp13} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Kevlar Cut Resistant Gloves
              </div>
              <div className="product-desc">
                <ul>
                  <li> High-grade, Heavy Duty, Dextrous </li>
                  <li> Cut Resistant</li>
                  <li> Knitted Kevlar fiber </li>
                  <li> CE EN 388 Compliant </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={hp14} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Polycotton Gloves
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy Duty, Dextrous </li>
                  <li> Polyester/cotton material </li>
                  <li> Color: Bleached white </li>
                  <li> One size fits all </li>
                  <li> 12 pairs / pack</li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={hp15} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Leather Gloves
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy Duty, Dextrous </li>
                  <li> Heat resistant </li>
                  <li> Good against Abrasion </li>
                  <li> Excellent for Welding works </li>
                  <li> Cow Hide Material </li>
                  <li> Length: 24cm </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={hp16} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Welding/Working Gloves
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy Duty, Dextrous </li>
                  <li> Heat resistant </li>
                  <li> Good against Abrasion </li>
                  <li> Excellent for Welding works </li>
                  <li> Cow Hide Material </li>
                  <li> Length: 24cm </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={hp17} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Leather Working Gloves
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy Duty, Dextrous </li>
                  <li> Heat resistant </li>
                  <li> Good against Abrasion </li>
                  <li> Excellent for Welding works </li>
                  <li> Cow Hide Material </li>
                  <li> Length: 24cm </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={hp18} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Leather Gloves
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy Duty, Dextrous </li>
                  <li> Heat resistant </li>
                  <li> Good against Abrasion </li>
                  <li> Excellent for Welding works </li>
                  <li> Cow Hide Material </li>
                  <li> Adjustable cuffs </li>
                  <li> Length: 24cm </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={hp19} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Leather Gloves
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy Duty, Dextrous </li>
                  <li> Heat resistant </li>
                  <li> Good against Abrasion </li>
                  <li> Excellent for Welding works </li>
                  <li> Cow Hide Material </li>
                  <li> Adjustable cuffs </li>
                  <li> Length: 24cm </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={hp20} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Leather Gloves
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy Duty, Dextrous </li>
                  <li> Heat resistant </li>
                  <li> Good against Abrasion </li>
                  <li> Excellent for Welding works </li>
                  <li> Cow Hide Material </li>
                  <li> Length: 24cm </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={hp21} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Leather Gloves
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy Duty, Dextrous </li>
                  <li> Heat resistant </li>
                  <li> Good against Abrasion </li>
                  <li> Excellent for Welding works </li>
                  <li> Cow Hide Material </li>
                  <li> Length: 40cm </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={hp22} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Leather Gloves
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy Duty, Dextrous </li>
                  <li> Heat resistant </li>
                  <li> Good against Abrasion </li>
                  <li> Excellent for Welding works </li>
                  <li> Cow Hide Material </li>
                  <li> Length: 40cm </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={hp23} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Leather Gloves
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy Duty, Dextrous </li>
                  <li> Heat resistant </li>
                  <li> Good against Abrasion </li>
                  <li> Excellent for Welding works </li>
                  <li> Cow Hide Material </li>
                  <li> 3-Finger Design </li>
                  <li> Length: 40cm </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={hp24} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Leather Gloves
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy Duty, Dextrous </li>
                  <li> Heat resistant </li>
                  <li> Good against Abrasion </li>
                  <li> Excellent for Welding works </li>
                  <li> Cow Hide Material </li>
                  <li> 3-Finger Design </li>
                  <li> Length: 40cm </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={hp25} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Leather Gloves
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy Duty, Dextrous </li>
                  <li> Heat resistant </li>
                  <li> Good against Abrasion </li>
                  <li> Excellent for Welding works </li>
                  <li> Cow Hide Material </li>
                  <li> Length: 40cm </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={hp26} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking TIG Welding Gloves
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy Duty, Dextrous </li>
                  <li> Heat resistant </li>
                  <li> Good against Abrasion </li>
                  <li> Excellent for Welding works </li>
                  <li> Pig Hide Material </li>
                  <li> Length: 24cm </li>
                </ul>
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
