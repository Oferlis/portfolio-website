import { HashLink } from "react-router-hash-link";

export default function About() {
  return (
    <div id="about" className="div-ex row-div about-div">
      <div className="mt-8 md:my-auto md:mx-auto md:py-4">
        <h1 className="about-h1">
          <em>A full-stack Developer</em> building web solutions
          <br />
          with a passion for
          <em> innovation</em> & <em>problem-solving.</em>
        </h1>
        <p className="about-par">
          I craft responsive websites where technologies meet creativity.
        </p>
        <button className="about-button">
          <HashLink smooth to="/#contact" className="navbar-item">
            Contact me
          </HashLink>
        </button>
      </div>
      <div>
        <img
          src={process.env.PUBLIC_URL + "/svgs/big-logo.svg"}
          alt="blob"
          className="about-image"
        />
      </div>
    </div>
  );
}
