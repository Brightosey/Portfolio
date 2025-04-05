import "./PortfolioPage.scss";
import reloFoodImage from "../../assets/Images/Relofoods.png";
import snapsImage from "../../assets/Images/snaps.png";
import instockImage from "../../assets/Images/instock.png";

function PortfolioPage() {
  return (
    <section className="portfolio">
      <article className="portfolio__project">
        <figure className="portfolio__image-wrapper">
          <img
            src={reloFoodImage}
            alt="Relofoods site Image"
            className="portfolio__image"
          />
        </figure>
        <div className="portfolio__content">
          <h1 className="portfolio__title">🌾 Relo Foods Website</h1>
          <p className="portfolio__description">
            I designed and developed the official website for Relo Foods Limited
            to strengthen its digital presence and engage users. The site
            features a four-page layout—Home, About Us, Contact, and Blog—with a
            modern boxed design, smooth gradient background, and vibrant orange
            accents. A dynamic hero section with sliding images and text creates
            an engaging first impression.{" "}
            <p>
              Throughout the project, I collaborated closely with the client,
              incorporating feedback and making adjustments as the project
              evolved. This reinforced my belief that client satisfaction is the
              true measure of success, as delivering exactly what the client
              needs is a direct reflection of your competency.{" "}
            </p>
            The design focused on consistency and user experience, with shared
            headers, subtle animations, and high-quality icons. This project
            gave me experience in end-to-end web development while reinforcing
            the importance of balancing technical skill with client-centric
            communication.
          </p>
          <p className="portfolio__tech-stack">
            <strong>Tech Stack:</strong> HTML, SCSS, JavaScript, Node.js,
            Express
          </p>
          <p className="portfolio__deployment">
            <strong>Deployment:</strong> Vercel (frontend), Render (backend)
          </p>
          <p className="portfolio__git">
            <strong>Github Links:</strong>{" "}
            <p>
              <a
                href="https://github.com/Brightosey/Capstone-Project.git"
                target="_blank"
              >
                Frontend Code
              </a>
            </p>
            <p>
              <a
                href="https://github.com/Brightosey/Capstone-Project-api.git"
                target="_blank"
              >
                Backend Code
              </a>
            </p>
          </p>
          <p className="portfolio__link">
            <strong>Live Site:</strong>{" "}
            <a href="https://relofoods.ng" target="_blank">
              relofoods.ng
            </a>
          </p>
        </div>
      </article>
      <article className="portfolio__project">
        <figure className="portfolio__image-wrapper">
          <img
            src={snapsImage}
            alt="Relofoods site Image"
            className="portfolio__image"
          />
        </figure>
        <div className="portfolio__content">
          <h1 className="portfolio__title">Snaps</h1>
          <p className="portfolio__description">
            Snaps is an interactive photo-sharing app that allows users to
            comment on photos, creating a dynamic, real-time feed that evolves
            with every interaction. Built with React for the frontend and
            Node.js for the backend, the app is deployed on Vercel and Render,
            ensuring fast load times and a responsive, mobile-friendly design.{" "}
            <br />
            The app’s intuitive interface provides smooth navigation across all
            devices, while its scalable architecture supports future features
            like likes, profiles, and more. Snaps showcases my ability to
            deliver a high-performance, full-stack application focused on user
            engagement and real-time interaction, emphasizing speed,
            scalability, and a seamless user experience.
          </p>

          <p className="portfolio__tech-stack">
            <strong>Tech Stack:</strong> HTML, SCSS, JavaScript, Node.js,
            Express
          </p>
          <p className="portfolio__deployment">
            <strong>Deployment:</strong> Vercel (frontend), Render (backend)
          </p>
          <p className="portfolio__git">
            <strong>Github Links:</strong>{" "}
            <p>
              <a
                href="https://github.com/Brightosey/Bright-Oyiborhoka-snaps.git"
                target="_blank"
              >
                Frontend Code
              </a>
            </p>
            <p>
              <a
                href="https://github.com/Brightosey/Bright-Oyiborhoka-snaps-api.git"
                target="_blank"
              >
                Backend Code
              </a>
            </p>
          </p>
          <p className="portfolio__link">
            <strong>Live Site:</strong>{" "}
            <a
              href="https://bright-oyiborhoka-snaps.vercel.app/"
              target="_blank"
            >
              snaps.com
            </a>
          </p>
        </div>
      </article>
      <article className="portfolio__project">
        <figure className="portfolio__image-wrapper">
          <img
            src={instockImage}
            alt="Relofoods site Image"
            className="portfolio__image"
          />
        </figure>
        <div className="portfolio__content">
          <h1 className="portfolio__title">Instock</h1>
          <p className="portfolio__tech-stack">
            Team Project | React, Express, MySQL
          </p>
          <p className="portfolio__description">
            InStock is a full-stack inventory management system developed for a
            Fortune 500 client to replace their outdated, underperforming
            platform. Built with React, Express, and MySQL, the application
            delivers a clean, responsive user experience and a backend built for
            scale.
            <br />
            But the real story was the collaboration behind the code. Working as
            part of an Agile team of five, we planned, built, and iterated
            together—using Jira to manage our sprints, align on tasks, and stay
            adaptable through change. Daily standups and constant communication
            taught me how to navigate blockers, support teammates, and keep
            momentum alive.
             <br />
            This experience showed me that great software is a team sport—and
            that thoughtful collaboration is just as essential as clean,
            scalable code.
          </p>
          <p className="portfolio__deployment">
            <strong>Deployment:</strong> Vercel (frontend), Render (backend)
          </p>
          <p className="portfolio__git">
            <strong>Github Links:</strong>{" "}
            <p>
              <a
                href="https://github.com/Brightosey/instock.git"
                target="_blank"
              >
                Frontend Code
              </a>
            </p>
            <p>
              <a
                href="https://github.com/Brightosey/instock-api.git"
                target="_blank"
              >
                Backend Code
              </a>
            </p>
          </p>
          <p className="portfolio__link">
            <strong>Live Site:</strong>{" "}
            <a href="https://instock-zeta.vercel.app/" target="_blank">
              instock.com
            </a>
          </p>
        </div>
      </article>
    </section>
  );
}

export default PortfolioPage;
