import React from "react";

import htmlIMG from "../../assets/SkillsImages/html.png";
import cssIMG from "../../assets/SkillsImages/css.png";
import jsIMG from "../../assets/SkillsImages/js.png";
import reactjsIMG from "../../assets/SkillsImages/reactjs.png";
import materialUI from "../../assets/SkillsImages/materialUI.png";
import angularImg from "../../assets/SkillsImages/angularjs.png";
// solidity

// IMPORTING SINGLE-EXP COMPONENT
import SingleExperience from "./SingleExperience";

function Experience() {
  let percentage = [90, 95, 80, 70, 80, 40, 50];
  let [html, css, js, reactjs, materialui, angular, ml] = percentage;

  return (
    <div id="Experience" className="ExpContainer bg-white">
      <div className="container">
        <div class="section-title">
          <h2>
            <b>My skills</b>
          </h2>
        </div>
        <div className="row justify-content-center">
          <SingleExperience
            Title="React JS"
            Img={reactjsIMG}
            Percentage={reactjs}
            GradientC_1="#4da5bd"
            GradientC_2="#dbf7ff"
            TextColor="#c4e6f0"
          />
          <SingleExperience
            Title="HTML"
            Img={htmlIMG}
            Percentage={html}
            GradientC_1="#ff4100"
            GradientC_2="#ff9a78"
            TextColor="#ff6935"
          />
          <SingleExperience
            Title="CSS"
            Img={cssIMG}
            Percentage={css}
            GradientC_1="#008cfc"
            GradientC_2="#9bd2fe"
            TextColor="#008cfc"
          />
          <SingleExperience
            Title="JavaScript"
            Img={jsIMG}
            Percentage={js}
            GradientC_1="#fddb22"
            GradientC_2="#ffef96"
            TextColor="#fee03e"
          />

          <SingleExperience
            Title="Angular JS"
            Img={angularImg}
            Percentage={angular}
            GradientC_1="#4da5bd"
            GradientC_2="#dbf7ff"
            TextColor="#c4e6f0"
          />

          <SingleExperience
            Title="Material UI"
            Img={materialUI}
            Percentage={materialui}
            GradientC_1="#005387"
            GradientC_2="#addfff"
            TextColor="#84bee3"
          />

          <SingleExperience
            Title="Machine learning"
            Percentage={ml}
            GradientC_1="#85929E"
            GradientC_2="#2C3E50"
            TextColor="#84bee3"
          />
        </div>
      </div>
    </div>
  );
}

export default Experience;
