import "./Footer.scss";
import githubIcon from "../../assets/Icon/github-icon.png";
import linkedinIcon from "../../assets/Icon/linkedin-icon.png";

function Footer() {
    return (
      <footer className="footer">
        <article className="footer__social-links">
          <a
            href="https://github.com/Brightosey"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <img
              src={githubIcon}
              alt="GitHub Icon"
              className="footer__icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/brightoyiborhoka"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn Icon"
              className="footer__icon"
            />
          </a>
        </article>
      </footer>
    );
  }
  
  export default Footer;
  
