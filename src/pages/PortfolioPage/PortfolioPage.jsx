import "./PortfolioPage.scss";
import reloFoodImage from "../../assets/Images/Relofoods.png";
import snapsImage from "../../assets/Images/snaps.png";
import instockImage from "../../assets/Images/instock.png";
import demoImage from "../../assets/Images/demo-image.png";
import weddingWebImage from "../../assets/Images/weddinweb.png";

function PortfolioPage() {
  return (
    <section className="portfolio">
      <h1 className="portfolio__title portfolio__title--1">Portfolio</h1>
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
            <p className="portfolio__link">
              <a
                href="https://github.com/Brightosey/Capstone-Project.git"
                target="_blank"
              >
                Frontend Code
              </a>
            </p>
            <p className="portfolio__link">
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
            src={instockImage}
            alt="Relofoods site Image"
            className="portfolio__image"
          />
        </figure>
        <div className="portfolio__content">
          <h1 className="portfolio__title">Instock</h1>
          <p className="portfolio__tech-stack">
            Team Project | React, SCSS, Node.js, Express, MySQL, Vite, Knex.js,
            Render, Vercel
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
            <p className="portfolio__link">
              <a href="https://github.com/Brightosey/instock" target="_blank">
                Frontend Code
              </a>
            </p>
            <p className="portfolio__link">
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
            <p className="portfolio__link">
              <a
                href="https://bright-oyiborhoka-snaps.vercel.app/"
                target="_blank"
              >
                Frontend Code
              </a>
            </p>
            <p className="portfolio__link">
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
            src={demoImage}
            alt="Demo site Image"
            className="portfolio__image"
          />
        </figure>
        <div className="portfolio__content">
          <h1 className="portfolio__title">Woodcraft</h1>
          <p className="portfolio__description">
            This project is a fully responsive, multi-page frontend portfolio
            website built using React, SCSS (Sass), and Lucide React, and
            deployed on Vercel. Designed to showcase a woodcraft and joinery
            business, the site includes structured sections such as a
            promotional production page with aligned text and imagery, an
            interactive FAQ with icon-based toggle functionality, a fully
            validated contact form with CAPTCHA integration, and a
            well-organized privacy policy page. The layout adapts seamlessly
            across mobile, tablet, and desktop devices using custom SCSS with
            media queries. Styling is implemented using the BEM methodology to
            ensure modularity and scalability. This project highlights my
            ability to build clean, user-friendly interfaces with
            component-based architecture and responsive design principles.
          </p>

          <p className="portfolio__tech-stack">
            <strong>Tech Stack:</strong> HTML, SCSS, JavaScript.
          </p>
          <p className="portfolio__deployment">
            <strong>Deployment:</strong> Vercel (frontend)
          </p>
          <p className="portfolio__git">
            <strong>Github Links:</strong>{" "}
            <p className="portfolio__link">
              <a href="https://github.com/Brightosey/demo-site" target="_blank">
                Frontend Code
              </a>
            </p>
          </p>
          <p className="portfolio__link">
            <strong>Live Site:</strong>{" "}
            <a href="https://demo-site-wine.vercel.app/" target="_blank">
              woodcraft.com
            </a>
          </p>
        </div>
      </article>
      <article className="portfolio__project">
        <figure className="portfolio__image-wrapper">
          <img
            src={weddingWebImage}
            alt="wedding site Image"
            className="portfolio__image"
          />
        </figure>
        <div className="portfolio__content">
          <h1 className="portfolio__title">💍Wedding Website</h1>
          <p className="portfolio__description">
            <p>
              <strong>
                Wedding Website – A Personalized Full-Stack Celebration
                Experience
              </strong>
              <br />
              <em>
                React | SCSS | Node.js | Express | PostgreSQL | Vite | Knex.js |
                Render | Vercel
              </em>
            </p>

            <p>
              This project is a full-stack wedding website built to create an
              interactive, visually stunning, and heartfelt digital space for a
              real-life couple’s celebration. From the moment visitors land on
              the site, they are welcomed into a personalized experience that
              blends aesthetics, performance, and user engagement.
            </p>

            <p>
              The frontend is built with React and Vite for blazing-fast load
              times, styled with custom SCSS modules following the BEM
              methodology to ensure clean, modular, and responsive design. I
              implemented dynamic components including a{" "}
              <strong>countdown timer</strong>, a{" "}
              <strong>digital guestbook</strong> (Wishlist), and a{" "}
              <strong>Wedding Party carousel</strong> that adapts gracefully
              across devices.
            </p>

            <p>
              On the backend, I developed a RESTful API using Node.js, Express,
              and PostgreSQL, with Knex.js as the query builder. Features
              include a fully functional <strong>wish submission system</strong>{" "}
              with GIF support (via Giphy API), likes tracking, and real-time
              data retrieval for guest interaction. The backend is securely
              hosted on Render with proper CORS configuration and environment
              variable handling.
            </p>

            <p>
              The site is deployed on Vercel for seamless CI/CD and performance,
              while the database and server run on Render, ensuring scalability
              and separation of concerns.
            </p>

            <p>
              This project showcases my ability to own the development lifecycle
              from UI/UX design to database architecture, and reflects my
              passion for creating joyful, purpose-driven web experiences.
            </p>
          </p>
          <p className="portfolio__tech-stack">
            <strong>Tech Stack:</strong> React, SCSS, Node.js, Express,
            PostgreSQL, Vite, Knex.js, Render, Vercel
          </p>
          <p className="portfolio__deployment">
            <strong>Deployment:</strong> Vercel (frontend), Render (backend)
          </p>
          <p className="portfolio__git">
            <strong>Github Links:</strong>{" "}
            <p className="portfolio__link">
              <a href="https://github.com/Brightosey/Union" target="_blank">
                Frontend Code
              </a>
            </p>
            <p className="portfolio__link">
              <a href="https://github.com/Brightosey/union-api" target="_blank">
                Backend Code
              </a>
            </p>
          </p>
          <p className="portfolio__link">
            <strong>Live Site:</strong>{" "}
            <a href="https://union-iota.vercel.app" target="_blank">
              union.ng
            </a>
          </p>
        </div>
      </article>
    </section>
  );
}

export default PortfolioPage;
