import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const isShowMenu = () => {
    if (showMenu) setShowMenu(false);
    else setShowMenu(true);
  };

  return (
    <nav className={`navbar + ${sticky ? "sticky" : ""}`}>
      <div id="home" className="row-div nav-div">
        <HashLink smooth to="/#home" className="row-div align-center">
          <img
            src={process.env.PUBLIC_URL + "/svgs/OL-logo.svg"}
            alt="me"
            className="h-8 mr-3"
          />
          <p className="name-logo">Ofer Lis</p>
        </HashLink>
        <button
          datacollaspe
          onClick={isShowMenu}
          type="button"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={showMenu ? "navigation-menu expanded" : "navigation-menu"}
          id="navbar-default"
        >
          <ul className="nav-list">
            <li>
              <HashLink
                smooth
                to="/#home"
                onClick={() => setShowMenu(false)}
                aria-current="page"
              >
                <em>#</em>
                Home
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#aboutme"
                onClick={() => setShowMenu(false)}
                className="navbar-item"
              >
                <em>#</em>About_me
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#skills"
                onClick={() => setShowMenu(false)}
                className="navbar-item"
              >
                <em>#</em>Skills
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#projects"
                onClick={() => setShowMenu(false)}
                className="navbar-item"
              >
                <em>#</em>Projects
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#blog-posts"
                onClick={() => setShowMenu(false)}
                className="navbar-item"
              >
                <em>#</em>Blog_posts
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#contact"
                onClick={() => setShowMenu(false)}
                className="navbar-item"
              >
                <em>#</em>Say_hi
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
