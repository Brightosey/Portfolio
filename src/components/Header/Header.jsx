import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import siteIcon from "../../assets/Icon/site-icon.png";
import { useState } from "react";
import { Menu, X} from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function clickButton() {
    setIsOpen((prev) => !prev);
  }

  return (
    <header className="header">
      <section className="header__container">
        <article className="header__logo">
          <Link to="/">
            <img src={siteIcon} alt="Icon" className="header__icon" />
          </Link>
        </article>

        <article className="header__nav-container">
          <button className="header__button" onClick={clickButton}>
            {isOpen ? (
              <X className="header__icon" />
            ) : (
              <Menu className="header__icon" />
            )}
          </button>
          <nav className={`header__nav ${isOpen ? "header__nav--open" : ""}`}>
            <ul
              className="header__list"
            >
              <li className="header__item">
                <NavLink
                  to="/"
                  className="header__link"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink
                  to="/about"
                  className="header__link"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink
                  to="/portfolio"
                  className="header__link"
                  onClick={() => setIsOpen(false)}
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink
                  to="/blog"
                  className="header__link"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink
                  to="/contact"
                  className="header__link"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </article>
      </section>
    </header>
  );
}

export default Header;
