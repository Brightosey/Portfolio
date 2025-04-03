import "./HomePage.scss";
import Avatar from "../../assets/Images/hero-image.png";
import htmlIcon from "../../assets/Icon/html.png";
import javascriptIcon from "../../assets/Icon/js.png";
import nodejsIcon from "../../assets/Icon/nodejs.png";
import reactIcon from "../../assets/Icon/react.png";
import sassIcon from "../../assets/Icon/sass.png";
import sqlIcon from "../../assets/Icon/sql.png";
import { Link } from "react-dom"

function HomePage() {
  return (
    <section className="home">
      <section className="home__hero">
        <figure className="home__image">
          <img src={Avatar} alt="avatar" className="home__image-avatar" />
        </figure>
        <div className="home__content">
          <h1 className="home__title">
            Welcome!
            <br />
            My name is Bright Oyiborhoka, and I build intuitive and impactful
            digital experiences.
          </h1>
          {/* <Link to="/portfolio">
            View My Work
            </Link> */}
        </div>
      </section>
      <section className="home__skills">
        <h1 className="home__skills-title">Skills</h1>
        <article className="home__skills-container">
          <div className="home__skills-wrap">
            <img className="home__skills-icon" src={htmlIcon} alt="htmlIcon" />
          </div>
          <div className="home__skills-wrap">
            <img className="home__skills-icon" src={sassIcon} alt="sassIcon" />
          </div>
          <div className="home__skills-wrap">
            <img
              className="home__skills-icon"
              src={javascriptIcon}
              alt="javascriptIcon"
            />
          </div>
          <div className="home__skills-wrap">
            <img
              className="home__skills-icon"
              src={reactIcon}
              alt="reactIcon"
            />
          </div>
          <div className="home__skills-wrap">
            <img
              className="home__skills-icon"
              src={nodejsIcon}
              alt="nodejsIcon"
            />
          </div>
          <div className="home__skills-wrap">
            <img className="home__skills-icon" src={sqlIcon} alt="sqlIcon" />
          </div>
        </article>
      </section>
    </section>
  );
}

export default HomePage;
