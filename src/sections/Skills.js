import SectionSeperator from "../components/sectionSeperator";
import Container from "../components/container";
import Cube from "../components/cube";
import Logo from "../components/Logo";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <SectionSeperator sectionName="Skills" />
      <div className="skills-div">
        <div style={{ position: "relative", width: 300, height: 300 }}>
          <Cube />
        </div>
        <div className="placeholder skills-mobile">
          <div className="boxes">
            <Container
              headline="Languages"
              items={["JavaScript, TypeScript", "Python, Ruby"]}
            />
          </div>
          <div className="boxes">
            <Container
              headline="Databases"
              items={["SQLite, Postgres", "Mongo"]}
            />
            <Container
              headline="Tools"
              items={["Docker, Git, Ansible", "Figma, VMware"]}
            />
          </div>
          <div className="boxes">
            <Container
              headline="Others"
              items={["HTML, CSS", "REST APIs, Jinja"]}
            />
            <Container
              headline="Frameworks"
              items={["React, Django", "NodeJS, Vue.js", "Express.js"]}
            />
          </div>
        </div>
      </div>
      <div className="logo-div">
        <Logo
          src={process.env.PUBLIC_URL + "/svgs/django.svg"}
          id="1"
          text="Django"
        />
        <Logo
          src={process.env.PUBLIC_URL + "/svgs/react.svg"}
          id="2"
          text="React"
        />
        <Logo
          src={process.env.PUBLIC_URL + "/svgs/typescript.svg"}
          id="11"
          text="Typescript"
        />
        <Logo
          src={process.env.PUBLIC_URL + "/svgs/nodejs.svg"}
          id="9"
          text="NodeJS"
        />
        <Logo
          src={process.env.PUBLIC_URL + "/svgs/docker.svg"}
          id="5"
          text="Docker"
        />
        <Logo
          src={process.env.PUBLIC_URL + "/svgs/html.svg"}
          id="8"
          text="HTML"
        />
        <Logo
          src={process.env.PUBLIC_URL + "/svgs/css.svg"}
          id="4"
          text="CSS"
        />
        <Logo
          src={process.env.PUBLIC_URL + "/svgs/ruby.svg"}
          id="10"
          text="Ruby"
        />
        <Logo
          src={process.env.PUBLIC_URL + "/svgs/postgresql.svg"}
          id="12"
          text="Postresql"
        />
        <Logo
          src={process.env.PUBLIC_URL + "/svgs/git.svg"}
          id="6"
          text="Git"
        />
        <Logo
          src={process.env.PUBLIC_URL + "/svgs/mongodb.svg"}
          id="13"
          text="MongoDB"
        />
        <Logo
          src={process.env.PUBLIC_URL + "/svgs/ansible.svg"}
          id="3"
          text="Ansible"
        />
      </div>
    </div>
  );
};

export default Skills;
