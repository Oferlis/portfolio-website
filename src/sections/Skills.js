import SectionSeperator from "../components/sectionSeperator";
import Container from "../components/container";
import Cube from "../components/cube";

const Skills = () => {
  return (
    <div className="skills">
      <SectionSeperator sectionName="Skills" />
      <Cube />
      <div className="placeholder">
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
            headline="Frameworks"
            items={["React, Django", "NodeJS, Vue"]}
          />
          <Container
            headline="Others"
            items={["HTML, CSS", "REST APIs, Jinja"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
