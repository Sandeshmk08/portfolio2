import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { portfolioData } from "../data/portfolioData";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>{portfolioData.hero.greeting}</h2>
            <h1>
              SANDESH
              <br />
              <span>KHAMKAR</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>{portfolioData.hero.titleLineOne}</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">&amp; Web</div>
              <div className="landing-h2-2">Developer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">{portfolioData.hero.titleLineTwo}</div>
              <div className="landing-h2-info-1">{portfolioData.hero.titleLineTwo}</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
