import { HashLink } from "react-router-hash-link";

export default function About() {
  return (
    <div id="about" className="div-ex row-div about-div">
      <div className="my-auto mx-auto py-4">
        <h1 className="about-h1">
          Hey, 👋
          <br /> I'm Ofer
        </h1>
        <p className="about-par">
          I am a passionate software developer, currently working at Kyndryl.
          <br />
          I believe in continuous learning and staying up-to-date with the
          latest industry trends,
          <br /> collaboration and effective communication are fundamental to my
          work.
          <br />
          <br />
          In my spare time I contribute to opensource projects and practice
          towards running half marathon 🏃 <br />
          <br />I would love to hear from you.
        </p>
        <div className="row-div">
          <button className="about-button">
            <HashLink smooth to="/#contact" className="navbar-item">
              Contact me
            </HashLink>
          </button>
        </div>
      </div>
      <div className="my-auto mr-3">
        <img
          src={process.env.PUBLIC_URL + "/svgs/big-logo.svg"}
          alt="blob"
          className="about-image"
        />
      </div>
    </div>
  );
}
