import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState("hidden");
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const isShowMenu = () => {
    if (showMenu === "hidden") setShowMenu("");
    else setShowMenu("hidden");
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
          onClick={isShowMenu}
          type="button"
          className="inline-flex md:items-center p-2text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:rin"
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
        <div className={showMenu + "md:block items-center"} id="navbar-default">
          <ul className="nav-list">
            <li>
              <HashLink
                smooth
                to="/#home"
                onClick={() => setShowMenu("hidden")}
                aria-current="page"
              >
                <em>#</em>
                Home
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#about"
                onClick={() => setShowMenu("hidden")}
                className="navbar-item"
              >
                <em>#</em>About
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#technologies"
                onClick={() => setShowMenu("hidden")}
                className="navbar-item"
              >
                <em>#</em>Technologies
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#projects"
                onClick={() => setShowMenu("hidden")}
                className="navbar-item"
              >
                <em>#</em>Projects
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#blog-posts"
                onClick={() => setShowMenu("hidden")}
                className="navbar-item"
              >
                <em>#</em>Blog_posts
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#contact"
                onClick={() => setShowMenu("hidden")}
                className="navbar-item"
              >
                <em>#</em>Say_hi
              </HashLink>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ofer-lis/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/LinkedIn_icon.svg"}
                  className="md:h-6 h-10 block py-2 md:py-0 pl-3 pr-4 "
                  alt="my LinkedIn profile"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Oferlis"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/github_icon.svg"}
                  alt="my Github profile"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
