import React from "react";

// MATERIAL CHIP UNDER BRAND NAME IN NAVBAR
import Chip from "@material-ui/core/Chip";

// IMPORTING REACT ICONS
import {
  SiLinkedin,
  SiGithub,
  SiTwitter,
  SiFiverr,
  SiUpwork,
} from "react-icons/si";
import { FiMail, FiPhoneCall } from "react-icons/fi";

import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <>
      <Fade delay={100} duration={1000} bottom>
        <div id="Contact" className="container-fluid FooterContainer">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <div className="BrandName">
                  <h1 style={{ textDecoration: "none" }}>PRATEEK BHATT</h1>
                  <Chip
                    className="UnderNameNChip"
                    style={{
                      fontSize: "1.5rem",
                      height: "2.5rem",
                      marginTop: ".2rem",
                    }}
                    label="FRONT-END DEVELOPER AND DESIGNER"
                  />
                </div>
                <div style={{ marginTop: "calc(1.5vh + 1.5vw)" }}>
                  <a target="blank" href="https://github.com/Prateek0468">
                    <SiGithub className="contactIcons " />
                  </a>
                  <a
                    target="blank"
                    href="https://www.linkedin.com/in/prateek-bhatt-3233351ab/"
                  >
                    <SiLinkedin className="contactIcons ml-3" />
                  </a>

                  <a target="blank" href="https://twitter.com/Prateek_bhatt_">
                    <SiTwitter className="contactIcons ml-3" />
                  </a>
                  {/* <a target="blank" href="https://www.fiverr.com/salmaank9">
                    <SiFiverr className="contactIcons ml-3" />
                  </a> */}
                  <a href="mailto:prateekbhatt.ai@gmail.com">
                    <FiMail className="contactIcons ml-3" />
                  </a>
                  <a href="tel:7009087334">
                    <FiPhoneCall className="contactIcons ml-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="h5 text-center text-white m-5">
            ©2021 . All rights Reserved
          </div>
        </div>
        <div id="bottomFooter" className="position-fixed bottom-0"></div>
      </Fade>
    </>
  );
};

export default Footer;
