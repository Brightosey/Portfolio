import "./HomePage.scss";
import Avatar from "../../assets/Images/hero-image.png";
import htmlIcon from "../../assets/Icon/html.png";
import javascriptIcon from "../../assets/Icon/js.png";
import nodejsIcon from "../../assets/Icon/nodejs.png";
import reactIcon from "../../assets/Icon/react.png";
import sassIcon from "../../assets/Icon/sass.png";
import sqlIcon from "../../assets/Icon/sql.png";
import githubIcon from "../../assets/Icon/github.png";
import { Link } from "react-router-dom";

function HomePage() {
  const testimonials = [
    {
      message:
        "Bright Oyiborhoka is a talented developer. In the course of building Relo Foods website, he supported and exceeded our expectations in every way. His ability to understand and present our key messages in an imaginative and creative way gave us a huge amount of confidence in him. I can’t recommend him highly enough and we look forward to continuing our working relationship together.",
      name: "Lukman OlaniyanLukman Olaniyan",
      relation: "Founder @Relo Foods",
    },
    {
      message:
        "Bright took initiative on the frontend during two hackathons, confidently owned tasks, and always delivered. A strong team asset.",
      name: "Dula Purkaystha",
      relation: "Team Member",
    },

    {
      message:
        "Bright led the frontend during a fast-paced hackathon, delivering a clean, user-friendly interface under pressure. Creative, reliable, and a great teammate.",
      name: "Marison Federipe",
      relation: "Team Member",
    },
  ];

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
          <Link to="/portfolio" className="home__cta">
            View My Work
          </Link>
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
          <div className="home__skills-wrap">
            <img className="home__skills-icon" src={githubIcon} alt="sqlIcon" />
          </div>
        </article>
      </section>
      <section className="home__value">
        <article className="home__service">
          <h2 className="home__service-header">My Craft</h2>
          <div className="home__service-item">
            <p className="home__service-list">Frontend Developer</p>
            <p className="home__service-list">Backend Developer</p>
          </div>
        </article>
        <article className="home__testimonial">
          <p className="home__testimonial-header">Testimonial</p>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="home__testimonial-container">
              <p className="home__testimonial-message">{testimonial.message}</p>
              <div className="home__testimonial-tags">
                <p className="home__testimonial-tag">{testimonial.name}</p>
                <p className="home__testimonial-tag">{testimonial.relation}</p>
              </div>
            </div>
          ))}
        </article>
      </section>
    </section>
  );
}

export default HomePage;
