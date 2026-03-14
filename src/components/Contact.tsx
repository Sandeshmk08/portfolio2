import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { portfolioData } from "../data/portfolioData";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href={`mailto:${portfolioData.contact.email}`} data-cursor="disable">
                {portfolioData.contact.email}
              </a>
            </p>
            <h4>Location</h4>
            <p>{portfolioData.location}</p>
            <h4>Hobby</h4>
            <p>{portfolioData.contact.hobby}</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href={`mailto:${portfolioData.contact.email}`}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              rel="noreferrer"
            >
              Email <MdArrowOutward />
            </a>
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              rel="noreferrer"
            >
              {portfolioData.contact.linkedinLabel} <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>{portfolioData.name}</span>
            </h2>
            <h5>
              <MdCopyright /> {portfolioData.footerYear}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
