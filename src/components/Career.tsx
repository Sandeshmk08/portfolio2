import "./styles/Career.css";
import { portfolioData } from "../data/portfolioData";

const Career = () => {
  return (
    <div className="career-section section-container" id="education">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> journey
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {portfolioData.education.map((item) => (
            <div className="career-info-box" key={item.degree}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.degree}</h4>
                  <h5>{item.institute}</h5>
                </div>
                <h3>{item.year}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
