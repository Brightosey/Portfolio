import "./Footer.scss";
import githubIcon from "../../assets/Icon/github-icon.png";
import linkedinIcon from "../../assets/Icon/linkedin-icon.png";
import { useEffect, useState } from "react";

function Footer() {
  const [isFooterVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;
  
      if (scrollY + windowHeight >= fullHeight - 10) {
        setFooterVisible(true);
      } else {
        setFooterVisible(false);
      }
    };
  
    checkScroll(); // Run on mount too
    window.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll); // Handle resizes too
  
    return () => {
      window.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);
  

  return (
    <footer className={`footer ${isFooterVisible ? "footer__show" : ""}`}>
      <article className="footer__social-links">
        <a
          href="https://github.com/Brightosey"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          <img src={githubIcon} alt="GitHub Icon" className="footer__icon" />
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
