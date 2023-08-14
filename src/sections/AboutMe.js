import SectionSeperator from "../components/sectionSeperator";

const AboutMe = () => {
  return (
    <div id="aboutme" className="aboutme-div">
      <SectionSeperator sectionName="About_me" />
      <p>
        Hey, I'm Ofer!
        <br />
        <br />I am a Full-stack Developer, based in Israel. I develop software
        and web applications from scratch into user-friendly experiences, using
        the latest technologies and languages.
        <br /> <br />
        Constant learning and improving is my passion, and I believe it is key
        for a great career and life.
        <br /> <br /> When I'm not coding, you can find me running, watching a
        Star Wars movie or planning my next project.
      </p>
    </div>
  );
};

export default AboutMe;
