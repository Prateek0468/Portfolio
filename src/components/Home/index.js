import React from "react";


import homeBg from "../../assets/homebg.png";
import Abstract from "../../assets/Abstract.mp4"

// IMPORTING REACT REVEAL
import Fade from "react-reveal/Fade";
import { SiFiverr, SiGithub, SiLinkedin, SiTwitter, SiUpwork } from "react-icons/si";
import { FiMail, FiPhoneCall } from "react-icons/fi";


const Home = () => {

  return (
    <>
      <Fade>
        <div id="About" className="HomeContainer">
          <video poster={homeBg} autoPlay loop muted src={Abstract} />
        </div>
      </Fade>
      <div className="AboutUS">
        <div className="text-center">
          <Fade delay={100} right cascade>
            <h1>
              <span style={{ fontWeight: 800, fontSize:"calc(3vh + 3vw)" }}> Prateek Bhatt </span>
            </h1>
          </Fade>
          <h3 style={{ fontWeight: 300, fontSize:"calc(1.5vh + 1.5vw)" }}>
            Front-end Web Developer and Designer.
          </h3>

                   <div style={{marginTop:"calc(3vh + 3vw)"}}>
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
                              <a href="tel:7009087334" >
                    <FiPhoneCall className="contactIcons ml-3" />
                  </a>
                </div>

        </div>
      </div>
   
    </>
  );
};

export default Home;
