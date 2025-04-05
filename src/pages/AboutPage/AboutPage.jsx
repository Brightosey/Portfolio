import "./AboutPage.scss";
import dynamicIcon from "../../assets/Icon/dynamic.png";
import collaborationIcon from "../../assets/Icon/partners.png";
import codeIcon from "../../assets/Icon/programming.png";
import fastIcon from "../../assets/Icon/quick.png";
import responsiveIcon from "../../assets/Icon/responsive-design.png";
import uiIcon from "../../assets/Icon/ui-design.png";
import Craft from "../../components/Craft/Craft";

function AboutPage() {
  return (
    <section className="about">
      <article className="about__content">
        <div className="about__intro">
          <p className="about__intro-text">
            Hi, I’m Bright. 👋 I’m a software engineer with a background in
            Mechanical Engineering, but my journey has led me to the world of
            code. Driven by a love for technology, problem-solving, and the
            desire to make a real difference, I’m passionate about creating
            solutions that not only work, but truly matter. <br />
            <br /> I’m dedicated to building beautiful, high-quality web
            applications using JavaScript, React, Node.js, MySQL, and SCSS. I
            believe in the art of clean, efficient code and seamless user
            experiences. Every project I take on is crafted with care to ensure
            it functions flawlessly, engages users, and remains accessible to
            all. My goal isn’t just to meet technical requirements, but to
            create lasting, meaningful value for those who interact with my
            work.
          </p>
        </div>

        <div className="about__excitement">
          <div className="about__excitement-container">
            <h1 className="about__excitement-title">What Excites Me</h1>
            <p className="about__excitement-text">
              I believe in the power of technology to drive meaningful change,
              whether it's streamlining complex systems, building accessible
              platforms, or delivering high-quality user experiences.
            </p>
          </div>

          <div className="about__highlight">
            <h2 className="about__highlight-title">highlights</h2>
            <div className="about__highlight-list">
              <figure className="about__highlight-item">
                <div className="about__highlight-icon">
                  <img
                    src={codeIcon}
                    alt="Code Icon"
                    className="about__highlight-img"
                  />
                </div>
                <p className="about__highlight-text">Concise</p>
              </figure>

              <figure className="about__highlight-item">
                <div className="about__highlight-icon">
                  <img
                    src={responsiveIcon}
                    alt="Responsive Icon"
                    className="about__highlight-img"
                  />
                </div>
                <p className="about__highlight-text">Responsive</p>
              </figure>

              <figure className="about__highlight-item">
                <div className="about__highlight-icon">
                  <img
                    src={fastIcon}
                    alt="Fast Icon"
                    className="about__highlight-img"
                  />
                </div>
                <p className="about__highlight-text">Optimized</p>
              </figure>

              <figure className="about__highlight-item">
                <div className="about__highlight-icon">
                  <img
                    src={collaborationIcon}
                    alt="Collaboration Icon"
                    className="about__highlight-img"
                  />
                </div>
                <p className="about__highlight-text">Collaborative</p>
              </figure>

              <figure className="about__highlight-item">
                <div className="about__highlight-icon">
                  <img
                    src={dynamicIcon}
                    alt="Dynamic Icon"
                    className="about__highlight-img"
                  />
                </div>
                <p className="about__highlight-text">Dynamic</p>
              </figure>

              <figure className="about__highlight-item">
                <div className="about__highlight-icon">
                  <img
                    src={uiIcon}
                    alt="UI/UX Icon"
                    className="about__highlight-img"
                  />
                </div>
                <p className="about__highlight-text">UI/UX</p>
              </figure>
            </div>
          </div>
        </div>
      </article>
      <Craft/>
    </section>
  );
}

export default AboutPage;
