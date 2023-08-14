import { HashLink } from "react-router-hash-link";

export default function About() {
  return (
    <div id="about" className="div-ex row-div about-div">
      <div className="mt-8 md:my-auto md:mx-10 md:py-4">
        <h1 className="about-h1">
          <em>A Full-stack Developer</em> building products
          <br />
          with a passion for
          <em> innovation</em> & <em>problem-solving.</em>
        </h1>
        <p className="about-par">
          I craft end-to-end Software and Web solutions, where technology meets
          creativity
        </p>
        <button className="about-button">
          <HashLink smooth to="/#contact" className="navbar-item">
            Contact me
          </HashLink>
        </button>
      </div>
      <div className="about-img-div">
        <img
          src={process.env.PUBLIC_URL + "/images/about-pic-ofer.png"}
          alt="blob"
          className="about-image"
        />
      </div>
    </div>
  );
}
